// console.log('Hello'); 

//export?
// module.exports = a;
//import
// const a = require("./index");

//intall package: npm install "packageName"

//Usage: documentation
// var figlet = require("figlet");

// figlet("Saalim", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });


//Express framework for node.js
//use of express => routing
//routing => GET POST
const express = require('express')
const app = express()


//ejs is dynamic html 
app.set("view engine", "ejs");
//static files
app.use(express.static('./public'));


// middleware
// runs before every route
// app.use(function(req, res, next){
//     console.log("Hello from middleware");
//     // res.send('Middleware');
//     next();
// });



//Routing
app.get('/', function (req, res) {
    res.render('index', {$8: "$28"});
    throw Error("Something went wrong!!");
});


app.get('/profile', function (req, res) {
    res.render('contact', {team: "chef"});
});

app.get('/error', function(req, res, next){
    // res.render('error');
    throw Error("Something went wrong!!");
});

//Dynamic rounting
// app.get('/profile/:username', function(req,res){
//     res.send(`Welcome from ${req.params.username}`);
// });

//Error handling in express
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
});


app.listen(3000);