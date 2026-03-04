

// önce modul tanimlamalarini  yapalım 
const fs = require("fs");  // fs : file system 
const path = require("path");

const filePath = path.join(__dirname ,"data", "notes.json");


function loadNotes() {

    // asagidaki kod  satırı dosyayı buffer  olarak  korur
    //  buffer olarak korumak demek : Dosyanın içeriğini RAM’de binary veri olarak geçici saklamak.
    const data = fs.readFileSync(filePath);

    //bize  buffer  değil string lazım..
    // buffer ı stringe çevireceğiz
    const stringData = data.toString();

    //json stringini  gerçek  diziye  çeviriyoruz 
    return JSON.parse(stringData);

}

function saveNotes (notes){

    // diziyi  JSON stringine çeviriyoruz 
    const jsonData = JSON.stringify(notes , null,2);
    fs.writeFileSync(filePath,jsonData);

}

function addNote(text) {

  const notes = loadNotes();//mevcut notları oku

  notes.push({
    id:notes.leght +1,
    text: text
  });
  //güncellenmiş  notları  kaydet 
  saveNotes(notes);

  console.log("not eklendi");

}

module.exports = {

    addNote // bu  addNote u da  app.js in içinde kullanacağız ondan dışarı açtık
};