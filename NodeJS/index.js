const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const mysql =require('mysql');

const { mongoose } = require('./db.js');

//const { mysql } = require('./db.js');

var reportdataController = require('./controllers/reportdataController.js');
var salesController = require('./controllers/salesController.js');
var marketController = require('./controllers/marketController.js');

var app = express();
app.use(bodyParser.json());
//For Angular App Connection
app.use(cors({ origin: 'http://localhost:4200'}));

//For Vus FrameWork
//app.use(cors({ origin: 'http://localhost:8080'}));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/reportdatas', reportdataController);
app.use('/sales', salesController);
app.use('/marketing', marketController);

//app.use(app.router);
//routes.initialize(app);

//connection for Mysql.. or mysql work start here....

var mysqlConnection = mysql.createConnection({
    host : "192.168.1.167",
    user : 'root',
    password :'password',
    database : 'odashboard'
    
});

mysqlConnection.connect((err) =>{
    if(!err){
        console.log('DB connection succeded.');
        console.log(mysqlConnection);
    }
    else
        console.log('DB connection Failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

// get all the sales table data..
app.get('/remote/sales', (req,res) => {
    mysqlConnection.query('SELECT * FROM sales', (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});

//get all the marketing table
app.get('/remote/marketing', (req,res) => {
    mysqlConnection.query('SELECT * FROM marketing', (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});


//get an reports by id ..

app.get('/reports/:id', (req,res) => {
    mysqlConnection.query('SELECT * FROM reportdata Where title= ?',[req.params.id], (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});

//Delete an Reports ..

app.delete('/report/:id', (req,res) => {
    mysqlConnection.query('DELETE from sales Where id= ?',[req.params.id], (err, rows, fields)=>{
        if(!err)
            res.send('Deleted SuccessFully..!');
        else
            console.log(err);
    });
});


// connection for Local Mysql

var localmysqlConnection = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password :'',
    database : 'reports'
    
});

localmysqlConnection.connect((err) =>{
    if(!err){
        console.log('DB connection succeded for local mysql.');
        console.log(localmysqlConnection);
    }
    else
        console.log('DB connection Failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

// get all the Sales data from ..
app.get('/report', (req,res) => {
    localmysqlConnection.query('SELECT * FROM reportdata', (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});

app.get('/report/:id', (req,res) => {
    localmysqlConnection.query('SELECT * FROM reportdata Where title= ?',[req.params.id], (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});



