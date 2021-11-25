const names = require("./free_tut2.js");

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("susan");

sayHi(names.john);

const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./dele.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err.code);
    return;
  }
  const first = result;
  readFile("./dle.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`Here is the result : ${first}, ${second}`);
      }
    );
  });
});

console.log("end");
