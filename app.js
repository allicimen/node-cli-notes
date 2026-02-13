

const notes = require("./notes");

// terminalden gelen komutları  alacaz 
const command  = process.argv[2]; // add
const text = process.argv[3]// süt al

if (command === "add"){

    notes.addNote(text);
}else {

// yanlış  kullanım olursa  düzeltme mesajı yazdıralım

console.log("kullanım :");
console.log('node app.js add "Not metni"');
}