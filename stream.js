var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe();
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
