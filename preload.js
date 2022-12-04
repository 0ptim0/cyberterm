const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  setText: (text) => ipcRenderer.send("set-text", text),
});
