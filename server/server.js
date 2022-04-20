const promise = require("bluebird");
const bodyParser = require('body-parser');
const Pool = require('pg').Pool;
const express = require("express");
const server = express();
const cors = require("cors");
const port = 3000;

const initOptions = {
    promiseLib: promise
};

const pgp = require('pg-promise')

(initOptions);
// Database connection details;

const cn = {

    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'comfi-furnitures',
    user: 'admin',
    password: 'root',

    // to auto-exit on idle, without having to shut-down the pool;
    allowExitOnIdle: true

};

const db = pgp(cn); // database instance;


//furnitures
var furnitures=undefined;
db.many("select * from furnitures")
.then((data) => {
   this.furnitures = data;
}).catch((error) => {
    console.log("Error : " + error);
});


//decor
var decor=undefined;
db.many("select * from decor")
.then((data) => {
   this.decor = data;
}).catch((error) => {
    console.log("Error : " + error);
});



//wfh
var wfh=undefined;
db.many("select * from wfh")
.then((data) => {
   this.wfh = data;
}).catch((error) => {
    console.log("Error : " + error);
});


server.use(cors());

server.use(bodyParser.json());

var ser = server.listen(port,() => {  
    // var host = ser.address().address  
    // var port = ser.address().port  
    console.log(`Comfi-Furnitures running at port ${port}`);
      
});  

server.get("/furnitures",(req, res) => {
      res.send(this.furnitures);
});

server.get("/decor",(req, res) => {
    res.send(this.decor);
});

server.get("/wfh",(req, res) => {
    res.send(this.wfh);
});


server.post("/feedback",(req, res) => {
    
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var suggestions = req.body.suggestions;

    db.none("insert into feedback(first_name, last_name, email, suggestions) values($1,$2,$3,$4)",[first_name, last_name, email, suggestions],(err,res)=>{
        console.log(err,res);
    })

    res.send('POST request to homepage');
})