import { app, shell, BrowserWindow, ipcMain, session, desktopCapturer, Tray, Menu, globalShortcut, ipcRenderer } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { screen } from 'electron'
import MenuBuilder from './menu'
import { Button, mouse, keyboard, KeyboardClass, Key } from "@nut-tree-fork/nut-js"
import { k } from 'vite/dist/node/types.d-aGj9QkWt'
import { on } from 'events'
import { sendLeftClickAt, sendRightClickAt, sendMiddleClickAt, sendMouseMoveAt } from "@pablodegroot/virtual_input"
import { WebRTC } from "@webrtc_rust_client"


WebRTC.create({
  iceServers: [
    {
      urls: ["stun:stun.cloudflare.com:3478",
        "turn:turn.cloudflare.com:3478?transport=udp",
        "turn:turn.cloudflare.com:3478?transport=tcp",
        "turns:turn.cloudflare.com:5349?transport=tcp"],
      username: "REDACTED_TURN_USERNAME",
      credential: "REDACTED_TURN_CREDENTIAL"

    }
  ]
}).then((webrtc) => {

  webrtc.onMessage((data) => {
    console.log("onMessage", data);
  });
});

const path = require('path')
let mainWindow: BrowserWindow | null = null
let onMainWindow: ((mainWindow: BrowserWindow) => void) | null = null;
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

  mainWindow.setAlwaysOnTop(true);
  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.setFullScreenable(false);
  mainWindow.setKiosk(true);
  mainWindow.setMenu(null);
  mainWindow.setMovable(false);
  mainWindow.setFocusable(false);

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
  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  if (onMainWindow != null) { onMainWindow(mainWindow) };

}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')
  session.defaultSession.setDisplayMediaRequestHandler((request, callback) => {

    if (!request.audioRequested) {
      desktopCapturer.getSources({ types: ['screen'] }).then((sources) => {

        // Grant access to the first screen found.
        callback({ video: sources[0], audio: 'loopback' })

      })
    } else {
      desktopCapturer.getSources({ types: ['window'] }).then((sources) => {
        // Grant access to the first screen found.
        sources = sources.filter(source => source.name.includes("Opera"));
        sources.forEach(source => console.log(source.name));
        callback({ video: sources[0], audio: 'loopback' })

      })
    }
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
  onMainWindow = (mainWindow) => {
    console.log("onMainWindow");
    //optimizer.watchWindowShortcuts(mainWindow)
    globalShortcut.register("CommandOrControl+F1", () => {
      console.log("Clearing All...");
      mainWindow.webContents.send("clearAll");
    });

  }

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))
  ipcMain.on("click", async (event, arg) => {
    console.log("clickMouse");
    console.log(arg);

    //mouse.click(Button.LEFT)
    /*
    let pos = await mouse.getPosition()
    let point = { x: arg.x, y: arg.y }
    let btn = Button.LEFT*/
    if (arg.button === "right") {
      sendRightClickAt(arg.x, arg.y);
    }
    else if (arg.button === "middle") {
      sendMiddleClickAt(arg.x, arg.y);
    } else {
      sendLeftClickAt(arg.x, arg.y);

    }
    /*await mouse.move([point])
    await mouse.click(btn);
    await mouse.move([pos]);
    */
    event.reply("clickMouse", "done");

  });
  ipcMain.on("move", async (event, arg) => {
    console.log("moveMouse");
    console.log(arg);
    sendMouseMoveAt(arg.x, arg.y);
    event.reply("moveMouse", "done");
  });

  ipcMain.on('sendKey', async (event, arg: { key: string, pressed: boolean }) => {
    var key = arg.key;
    if (key.length === 1) {
      key = key.toUpperCase();
    }
    key = key
      .replace("Digit", "Num")
      .replace("Key", "")
      .replace("Numpad", "NumPad")
      .replace("Meta", "Win")
      ;
    switch (key) {
      case "ShiftLeft":
        key = "LeftShift";
        break;
      case "ShiftRight":
        key = "RightShift";
        break;

      case "ControlLeft":
        key = "LeftControl";
        break;
      case "ControlRight":
        key = "RightControl";
        break;
      case "AltLeft":
        key = "LeftAlt";
        break;
      case "AltRight":
        key = "RightAlt";
        break;
      case "BracketLeft":
        key = "LeftBracket";
        break;
      case "BracketRight":
        key = "RightBracket";
        break;
      case "WinLeft":
        key = "LeftWin";
        break;
      case "WinRight":
        key = "RightWin";
        break;

      case "PrintScreen":
        key = "Print";
        break;
      case ",":
        key = "Comma";
        break;
      case ".":
        key = "Period";
        break;
      case "/":
        key = "Slash";
        break;
      case "NumPadDivide":
        key = "Divide";
        break;
      case "NumPadMultiply":
        key = "Multiply";
        break;
      case "NumPadSubtract":
        key = "Subtract";
        break;
      case "NumPadAdd":
        key = "Add";
        break;
      case "NumPadEnter":
        key = "Enter";
        break;
      case "NumPadDecimal":
        key = "Decimal";
        break;



    }


    let keycode = Key[key as keyof KeyboardClass];
    console.log(arg);

    console.log(keycode);
    if (arg.pressed) {
      keyboard.pressKey(keycode);
    } else {
      keyboard.releaseKey(keycode);
    }
    event.reply('sendKey', "done");
  });
  ipcMain.on('scroll', async (event, arg) => {
    var amount = arg.amount;
    var userPos = await mouse.getPosition();
    var newPos = { x: arg.x, y: arg.y };
    mouse.move([newPos]);
    if (arg.direction === "up") {
      mouse.scrollUp(amount);
    } else {
      mouse.scrollDown(amount);
    }
    mouse.move([userPos]);
    event.reply('scroll', "done");
  });
  ipcMain.on('getRoom', async (event, arg) => {
    console.log("room", room);
    event.reply('getRoom', room);
  });
  ipcMain.on('getUserId', async (event, arg) => {
    console.log(user);
    event.reply('getUserId', user);
  });
  let tray = null as Tray | null;
  setTimeout(function () {
    createWindow();
    tray = new Tray(path.join(__dirname, '../../assets/icon.png'))
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Exit',
        click: () => {
          app.quit()
        }
      }
    ])
    tray.setToolTip('Estas compartiendo pantalla')
    tray.setContextMenu(contextMenu)

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
