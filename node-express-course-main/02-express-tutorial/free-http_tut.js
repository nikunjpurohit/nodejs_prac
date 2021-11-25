console.log("Express Tutorial");
const { readFileSync } = require("fs");
const homepage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homelogo = readFileSync("./navbar-app/logo.svg");
const homejs = readFileSync("./navbar-app/browser-app.js");

const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>Hellow World</h1>`);
    res.end("home page");
  } else if (url == "/about") {
    console.log(req.url);
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homelogo);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homejs);
    res.end();
  } else {
    console.log(req.url);
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Resource doesnt exist</h1>`);
    res.end("page not found");
  }
});

server.listen(5000);
