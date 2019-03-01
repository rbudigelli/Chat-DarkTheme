// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let willQuitApp = false;

function createWindow () {
  // Create the browser window.
  //mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false
    }
  })

  // Load Google Chat. 
  //mainWindow.loadURL("https://chat.google.com");
  mainWindow.loadURL("https://chat.google.com");
  mainWindow.webContents.on('did-finish-load', function() {
    insertCustomCss(mainWindow);
    
  })

  const shell = require('electron').shell;

  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    shell.openExternal(url)
  });

  mainWindow.on('close', (e) => {
    if (willQuitApp) {
      /* the user tried to quit the app */
      mainWindow = null;
    } else {
      /* the user only tried to close the window */
      e.preventDefault();
      mainWindow.hide();
    }
  });

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  const Menu = require('electron').Menu

  const template = [{
      label: "Edit",
      submenu: [
          { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
          { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
          { type: "separator" },
          { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
          { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
          { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
          { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
      ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));  
}

const _fs = require("fs")
function insertCustomCss(mainWindow) {
  _fs.readFile(__dirname + '/darktheme.css', "utf-8", function(error, data) {
    if(!error){
      var formatedData = data.replace(/\s{2,10}/g, ' ').trim()
      mainWindow.webContents.insertCSS(formatedData)
    }
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function (e) {
  e.preventDefault();
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
  else {
    willQuitApp = false;
    mainWindow.show();
  }
})

/* 'before-quit' is emitted when Electron receives 
 * the signal to exit and wants to start closing windows */
app.on('before-quit', () => willQuitApp = true);

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
