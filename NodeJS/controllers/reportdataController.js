const express = require('express');

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Reportdata } = require('../models/reportdata.js');

//localhost:3000/reportdatas
router.get('/', (req, res) => {
    Reportdata.find((err, docs) => {
        if(!err){ res.send(docs);}
        else { console.log('Error in retriving Reportdata :' + JSON.stringify(err, undefined, 2));}
    });
});

router.post('/',(req,res) =>{
    var report =new Reportdata({
        title : req.body.title,
        description : req.body.description,
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

        Reportdata.find({title:req.params.id}, (err, doc) => {
            if(!err) { res.send(doc); }
            else {
                console.log("Error in retriving ReportData :" +JSON.stringify(err, undefined, 2));
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