const http = require("http");
const mongodb = require("mongodb");

let db; //mongoDB ulashda verebl orqali ulash
const connectionString ="mongodb+srv://Mark01:GF8pc0oAChRzQweb@cluster0.nfdtiyw.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true, //mongoDB parametrlari
    useUnifiedTopology: true, 
}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
         module.exports = client; // app ga uzatish export qilish clientni ichida DB degan object bor ulash=>const db = require("./server").db();

        const app = require("./app");
        const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
    });
   }
 } 
);

