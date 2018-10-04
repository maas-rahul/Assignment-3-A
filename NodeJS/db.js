const mongoose =require('mongoose');
const mysql =require('mysql');

mongoose.connect('mongodb://localhost:27017/report', (err) => {
    if(!err)
        console.log('mongoDB connection succeeded.');
        else
    console.log('Error in DB Connection :' + JSON.stringify(err, undefined,2));

});

//connection for Mysql..

/*var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'',
    database : 'reports'
});

mysqlConnection.connect((err) =>{
    if(!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection Failed \n Error: ' + JSON.stringify(err, undefined, 2));
});*/



module.exports = mongoose;
//module.exports = mysql;