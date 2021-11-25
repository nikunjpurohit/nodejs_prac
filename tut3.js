const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data) => {
  console.log(data);
  data = data.replace("browser", "han");
  console.log(data);

  console.log("Creating a new file...");

  fs.writeFileSync("rohan.txt", data);
});

console.log("this is a message");
