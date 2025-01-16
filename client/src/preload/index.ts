import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
//window.addEventListener('DOMContentLoaded', () => {

//})
// Custom APIs for renderer
const api = {


  onClearAll(func: () => void) {
    ipcRenderer.on('clearAll', (_e, args) => {
      console.log("preload: clearAll");
      func();
      console.log("preload: clearAll");
    });
  },
  onConnection(func: (id: string) => void) {
    console.log("preload: onConnection");

    ipcRenderer.on('connection', (_e, id) => {
      console.log("preload: connection, id: ", id);
      func(id);
      //try { func(id) } catch (e) { console.error(e) }
      console.log("preload: connection");
      //console.log(ipcRenderer.eventNames())
    });

  },
  onClose(cb: (id: string) => void) {
    ipcRenderer.on('close', (_e, id) => {
      cb(id);
      console.log("preload: close");
    });
  },
  addData(id: string, func: (data: any) => void) {
    console.log("preload: data id:", id);
    ipcRenderer.on(id, (_e, args) => {
      console.log("preload: data", args);
      //if (args.id == id) {
      func(args);
      //}

    });
    //if (this.data_callbacks.size == 0) {
    /*ipcRenderer.on('data', (_e, args: any) => {
      console.log("preload: data", args);
      //const cb = this.data_callbacks.get(args.id);
      //if (cb) {
      //  cb(args.data);
      //}
      console.log("preload: data");
    });
    //}
    this.data_callbacks.set(id, func);*/
  },

  onData2() {

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
    return new Promise((resolve, _reject) => {
      ipcRenderer.on('getRoom', (_event, arg) => {
        console.log("room1", arg);
        resolve(arg);
      });
    }
    );
  },
  getUserId() {
    ipcRenderer.send('getUserId');
    return new Promise((resolve, _reject) => {
      ipcRenderer.on('getUserId', (_event, arg) => {
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
