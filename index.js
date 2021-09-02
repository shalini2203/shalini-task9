const fs = require("fs");

fs.mkdir("Shalini");

fs.writeFileSync("Shalini/task.txt","My name is Shalini Singh");
fs.appendFileSync("Shalini/task.txt"," Welcome to the FS module");


const data = fs.readFileSync("Shalini/task.txt", "utf8");
console.log(data);
fs.renamesync("Shalini/task.txt", "Shalini/myTask.txt");

fs.unlinkSync("Shalini/myTask.txt");
fs.rmdirSync("Shalini");