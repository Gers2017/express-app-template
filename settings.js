const path = require('path');

module.exports = {
  appName: "express app template",
  port: 8080,
  viewEngine: "ejs",
  views: path.join(__dirname, "views"),
  static: path.join(__dirname, "public")
}
