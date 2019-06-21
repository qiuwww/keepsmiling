// server.js

const express = require("express");
const opn = require("opn");
const path = require("path");

module.exports = function () {
  var app = express();
  // eslint-disable-next-line no-undef
  app.use(express.static(path.resolve(__dirname, "../static")));
  var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
  });
  opn("http://127.0.0.1:3002").then(function () {
    console.log("http://127.0.0.1:3002");
  });
};
