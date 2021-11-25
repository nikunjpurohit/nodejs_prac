const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recived ${name} ${id}`);
});

customEmitter.on("response", () => {
  console.log("some lofic here recived");
});

customEmitter.emit("response", "john", 34);
