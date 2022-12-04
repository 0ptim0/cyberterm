const { app, BrowserWindow, ipcMain } = require("electron");
const { SerialPort } = require("serialport");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    backgroundColor: "#777",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.on("set-text", (event, text) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(text);
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length == 0) createWindow();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });

  mainWindow.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
