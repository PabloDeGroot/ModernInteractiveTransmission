import { app, shell, BrowserWindow, ipcMain,session, desktopCapturer } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { screen } from 'electron'
//import { Button, mouse, keyboard, KeyboardClass, Key } from "@nut-tree-fork/nut-js"
const path = require('path')

let room = "room1";
let user = "app_OFppzHR7PuVlmdY723qUKDh1B6A2";
function createWindow(): void {

  let { width, height } = screen.getPrimaryDisplay().size; // TODO : get scale factor https://www.electronjs.org/docs/latest/api/structures/display  
  width = screen.getPrimaryDisplay().workAreaSize.width;
  height = screen.getPrimaryDisplay().workAreaSize.height;
  width = width * screen.getPrimaryDisplay().scaleFactor;
  height = height * screen.getPrimaryDisplay().scaleFactor;
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    show: false,
    transparent: true,
    fullscreen: true,
    frame: false,
    width: width,
    height: height,


    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: join(app.getAppPath(), './out/preload/index.js'),
      sandbox: false
    }
  })

  //mainWindow.setAlwaysOnTop(true);
  mainWindow.setIgnoreMouseEvents(true);

  mainWindow.setFullScreenable(false);
  //mainWindow.setKiosk(true);
  //mainWindow.setMenu(null);
  mainWindow.setMovable(false);
  //mainWindow.setFocusable(false);
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })



  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(app.getAppPath(), './src/renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')
  session.defaultSession.setDisplayMediaRequestHandler((request, callback) => {
    
    desktopCapturer.getSources({ types: ['screen'] }).then((sources) => {
      // Grant access to the first screen found.
      callback({ video: sources[0], audio: 'loopback' })
      
    })
    // If true, use the system picker if available.
    // Note: this is currently experimental. If the system picker
    // is available, it will be used and the media request handler
    // will not be invoked.
  })


  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))
  // ipcMain.on("clickMouse", async (event, arg) => {
  //   mouse.click(Button.LEFT)
  //   let pos = await mouse.getPosition()
  //   let point = { x: arg.x, y: arg.y }
  //   let btn = Button.LEFT
  //   if (arg.button === "right") {
  //     btn = Button.RIGHT
  //   }
  //   else if (arg.button === "middle") {
  //     btn = Button.MIDDLE
  //   }
  //   await mouse.move([point])
  //   await mouse.click(btn);
  //   await mouse.move([pos]);
  //   event.reply("clickMouse", "done");

  // });

  // ipcMain.on('sendKey', async (event, arg: { key: Key, pressed: boolean }) => {
  //   var key = arg.key;
  //   console.log(arg);
  //   if (arg.pressed) {
  //     keyboard.pressKey(key);
  //   } else {
  //     keyboard.releaseKey(key);
  //   }
  //   event.reply('sendKey', "done");
  // });
  // ipcMain.on('scroll', async (event, arg) => {
  //   var amount = arg.amount;
  //   var userPos = await mouse.getPosition();
  //   var newPos = { x: arg.x, y: arg.y };
  //   mouse.move([newPos]);
  //   if (arg.direction === "up") {
  //     mouse.scrollUp(amount);
  //   } else {
  //     mouse.scrollDown(amount);
  //   }
  //   mouse.move([userPos]);
  //   event.reply('scroll', "done");
  // });
  ipcMain.on('getRoom', async (event, arg) => {
    console.log("room", room);
    event.reply('getRoom', room);
  });
  ipcMain.on('getUserId', async (event, arg) => {
    console.log(user);
    event.reply('getUserId', user);
  });

  setTimeout(function () {
    createWindow();
  }, 10);
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
