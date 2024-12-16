import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  
  onClearAll(func: () => void) {
    ipcRenderer.on('clearAll', (e)=>{
      func();
      console.log("preload: clearAll");
    });
  },

  //ipcMain.on('clickMouse', async (event, arg) => {
  clickMouse(x: number, y: number, type: string) {
    ipcRenderer.send('clickMouse', { x: x, y: y, type: type });
  },
  moveMouse(x: number, y: number) {
    ipcRenderer.send('moveMouse', { x: x, y: y });
  },
  //ipcMain.on('keyDown', async (event, arg) => {
  keyDown(key: string) {
    ipcRenderer.send('keyDown', { key: key });
  },
  //ipcMain.on('keyUp', async (event, arg) => {
  keyUp(key: string) {
    ipcRenderer.send('keyUp', { key: key });
  },
  scroll(scroll: number, x: number, y: number) {
    ipcRenderer.send('scroll', { scroll: scroll, x: x, y: y });
  },
  getRoom() {
    ipcRenderer.send('getRoom');
    return new Promise((resolve, reject) => {
      ipcRenderer.on('getRoom', (event, arg) => {
        console.log("room1", arg);
        resolve(arg);
      });
    }
    );
  },
  getUserId() {
    ipcRenderer.send('getUserId');
    return new Promise((resolve, reject) => {
      ipcRenderer.on('getUserId', (event, arg) => {
        resolve(arg);
      });
    }
    );

  },
  /*
ipcRenderer: {
  sendMessage(channel: Channels, args: unknown[]) {
    ipcRenderer.send(channel, args);
  },
  on(channel: Channels, func: (...args: unknown[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      func(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
  once(channel: Channels, func: (...args: unknown[]) => void) {
    ipcRenderer.once(channel, (_event, ...args) => func(...args));
  },
},
*/

}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
