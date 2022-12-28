const express = require('express');
const app = express();
const mysql = require('mysql');
const doenv = require('dotenv');
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");

doenv.config({
    path: "./.env"
});

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Dhosanjay7",
    database : "login_crud"
})

db.connect((err)=> {
    if(err) {
        console.log(err)
    }else {
        console.log("Mysql connection success")
    }
})

app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
const location = path.join(__dirname,'./public');
app.use(express.static(location));

app.set("view engine", "hbs")
const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);

app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));



app.listen(process.env.PORT,()=>{
    console.log("server running on port 3001")
})
