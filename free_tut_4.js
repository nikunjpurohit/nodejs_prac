const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");

  res.end(`<h1>hello world</h1>`);
});

server.listen(5000, () => {
  console.log("server is listening on port:5000........");
  console.log("yo");
});

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const start = async () => {
  try {
    const first = await readFilePromise("./dle.txt", "utf-8");
    const second = await readFilePromise("./dele.txt", "utf-8");
    await writeFilePromise("./yo.txt", `THIS IS AWESOME: ${first} ${second}`, {
      flag: "a",
    });

    console.log(second);
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();
