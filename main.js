const electron = require('electron');
const { app, BrowserWindow } = require('electron');   // app, BrowserWindow 2객체 생성

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
   // win.loadFile('main.html');
   win.loadURL('https://www.baidu.com');   // link로 열기
}

  app.whenReady().then(createWindow);


  // 창 닫을 때 발생하는 event
  // darwin는 macOS iphone system => 퇴출방법 다르다(command Q).
  app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', function() {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })