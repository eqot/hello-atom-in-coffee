(function() {
  var BrowserWindow, app, mainWindow;

  app = require('app');

  BrowserWindow = require('browser-window');

  require('crash-reporter').start();

  mainWindow = null;

  app.on('window-all-closed', (function(_this) {
    return function() {
      if (process.platform !== 'darwin') {
        return app.quit;
      }
    };
  })(this));

  app.on('ready', (function(_this) {
    return function() {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600
      });
      mainWindow.loadUrl('file://' + __dirname + '/../../index.html');
      return mainWindow.on('closed', function() {
        return mainWindow = null;
      });
    };
  })(this));

}).call(this);
