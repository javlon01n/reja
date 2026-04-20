console.log("Web serverni boshlash");
const express = require("express"); //express nima? bu: Node.s uchun server yaratish framework’i, Node.js → oddiy dvigatel Express → tayyor mashina 
const app = express(); 
const http = require("http");

// 1: kirish kodlari
  //expressga kirib kelayotgan malumotlarga bo'liq bo'lgan kodlar
app.use(express.static("public")); //xar qanday braozerdan kirib kelayotgan malumotlardan faqat public folderni ko'raoladi
app.use(express.json()); //kirib kelayotgan json formatdagi datani object formatga alamshtirib beradi
app.use(express.urlencoded({extended: true})); //HTML formdan post qilingan narsalarni qabul qilish uchun kk

// 2: Session code
// 3: views code     views → frontend sahifalar
app.set("views", "views"); //HTML frontentni yasaymiz viewni ichida
app.set("view engine", "ejs"); BSSR  //.ejs → HTML + JS    //res.render() → sahifani chiqaradi

// 4: Routing code
app.get("/hello", function(req, res) {
    res.end("<h1>HELLO WORLD</h1>");
});
app.get("/gift", function(req, res) {
    res.end("<h1>siz sovg'alar bo'limidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
console.log(`The server is running successfully on port: ${PORT}`);
});
