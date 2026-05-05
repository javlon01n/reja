console.log("Web serverni boshlash");
const { log } = require("console");
const express = require("express"); //express nima? bu: Node.s uchun server yaratish framework’i, Node.js → oddiy dvigatel Express → tayyor mashina 
const app = express(); 
const fs = require("fs");

//MongoDB Chaqirish
const db = require("./server").db();  //db mongodb objecti bo'lib shu orqali CRUD ishlaydi
const mongodb = require("mongodb"); 

// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     user = [];
//   } else {
//     try {
//       user = JSON.parse(data || "[]");
//     } catch {
//       user = [];
//     }
//   }
// });


// 1: kirish kodlari
  //expressga kirib kelayotgan malumotlarga bo'liq bo'lgan kodlar
app.use(express.static("public")); //xar qanday braozerdan kirib kelayotgan malumotlardan faqat public folderni ko'raoladi
app.use(express.json()); //kirib kelayotgan json formatdagi datani object formatga alamshtirib beradi
app.use(express.urlencoded({extended: true})); //HTML formdan post qilingan narsalarni qabul qilish uchun kk

// 2: Session code
// 3: views code     views → frontend sahifalar
app.set("views", "views"); //HTML frontentni yasaymiz viewni ichida
app.set("view engine", "ejs"); //BSSR  //.ejs → HTML + JS    //res.render() → sahifani chiqaradi

// 4: Routing code
app.post("/create-item", (req, res) => {
   console.log('user entered /create-item'); //api nomi reja ejs bilan ulash
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => { // dakumention boyichainsertOne bizga gollbek qaytaradi 
     res.json(data.ops[0]); 
    });
});


app.post("/delete-item", (req, res) => {
 const id = req.body.id;
 db.collection("plans").deleteOne(
  {_id: new mongodb.ObjectId(id)},
  function (err, data) {
    res.json({state: "success"})
  }
 );
}); 


app.post("/edit-item", (req, res) => {       //golbek edit-item ulash
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate //databasega ulab edit qilish (findOneAndUpdate)
  ( { _id: new mongodb.ObjectId(data.id)},
  { $set: { reja: data.new_input }},
  function (err, data) {
    res.json({state: "success"});
  } );



app.post("/delete-all", (req, res) =>{        //hamma rejalarni ochirishni momgodbga ulash
  db.collection("plans").deleteMany(function() {
    res.json({ state: "hamma rejalar ochirilsinmi"});
  });
});

  
}); 
// app.get('/author', (req, res) => {

//   res.render("author", {user: user } );
// });

app.get("/", function (req , res) {
  console.log('user entered /');
  db.collection("plans") 
  .find()
  .toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.render("reja", {items: data});     
    }
  });
 
});



module.exports = app;