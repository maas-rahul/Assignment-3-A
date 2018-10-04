const express = require('express');

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { market } = require('../models/market.js');

router.get('/', (req, res) => {
    market.find((err, docs) => {
        if(!err){ res.send(docs);}
        else { console.log('Error in retriving sales data :' + JSON.stringify(err, undefined, 2));}
    });
});

router.post('/',(req,res) =>{
    var report =new market({
        customer_id : req.body.customer_id,
        item : req.body.item,
        month : req.body.month,
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

        market.find({title:req.params.id}, (err, doc) => {
            if(!err) { res.send(doc); }
            else {
                console.log("Error in retriving Reporttable :" +JSON.stringify(err, undefined, 2));
            }
        });
});

module.exports = router;