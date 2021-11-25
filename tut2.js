const fs = require("fs");

let text = fs.readFileSync("dele.txt", "utf-8");
console.log(text);
text = text.replace("browser", "rohan");
console.log(text);

console.log("Creating a new file...");

fs.writeFileSync("rohan.txt", text);
