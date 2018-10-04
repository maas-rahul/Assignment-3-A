const express = require('express');

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { sales } = require('../models/sales.js');

//localhost:3000/reporttables
router.get('/', (req, res) => {
    sales.find((err, docs) => {
        if(!err){ res.send(docs);}
        else { console.log('Error in retriving sales data :' + JSON.stringify(err, undefined, 2));}
    });
});

router.post('/',(req,res) =>{
    var report =new sales({
        month : req.body.month,
        number_of_orders : req.body.number_of_orders,
        state_of_order : req.body.state_of_order,
        payment_status : req.body.payment_status,
        amount : req.body.amount,
        image : req.body.image,
    });
    report.save((err, doc) => { 
        if(!err){ res.send(doc); }
        else { console.log('Error in report data save: '+ JSON.stringify(err, undefined, 2));}
    });
});
//get data by id here....
router.get('/:id',(req,res) => {
    //if(!ObjectId.isValid(req.params.id))
        //return res.status(400).send('No records with Given ID : ${req.params.id}');

        sales.find({title:req.params.id}, (err, doc) => {
            if(!err) { res.send(doc); }
            else {
                console.log("Error in retriving Reporttable :" +JSON.stringify(err, undefined, 2));
            }
        });
});
// find data here...

/*router.get('/', (req, res) => {
    Reportdata.findOne((err, docs) => {
        if(!err){ res.send(docs);}
        else { console.log('Error in retriving Reportdata :' + JSON.stringify(err, undefined, 2));}
    });
});..*/
module.exports = router;