var {BrowserWindow} = require('electron')
function createWindow(){
var win = new BrowserWindow({
webPreferences:{
nodeIntegration: true
}
})  
win.loadURL('https://www.chatcomm.net')
win.setMenu(null)
}
setTimeout(createWindow,1500)