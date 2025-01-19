import { app, BrowserWindow } from 'electron';
import * as path from 'path';

app.commandLine.appendSwitch('no-sandbox');
app.disableHardwareAcceleration();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, '../preload/preload.js')
    }
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('Running in development mode');
    win.loadURL('http://localhost:8080');
    win.webContents.openDevTools();
  } else {
    console.log('Running in production mode');
    win.loadFile(path.join(__dirname, '../renderer/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});