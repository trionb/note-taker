const fs = require("fs");
let express = require("express");
let path = require("path");
let db =require("./db/db.json");
const { v4: uuidv4 } = require('uuid');



// Sets up the Express App
let app = express();
var PORT = process.env.PORT||8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//makes local host look in the publick folder on client side
app.use(express.static("public"));

app.listen(PORT,function(){
    console.log("app listening Port"+PORT)
})

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// //read db.json file and return saved notes as JSON
app.get("/api/notes",function(req,res){
    return res.json(db);
})

//receive a new note and return new note ti the client
app.post("/api/notes", function(req,res){
    return res.json(db);
})
// //should receive a query parameter with id 
app.delete(`/api/notes/:id`, function(req,res){
    var noteChosen= req.params.id;
    //if(let i =0; i<)
    return res.Json(db);
})

uuidv4();
