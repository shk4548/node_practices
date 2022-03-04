const express = require('express');

const router = express.Router();

router.route('/01').get(function(req,resp){
    resp.render('hello/01') // view engine
    // console.log("!!!");
    // resp.writeHead(200, { // header
    //     'Content-Type': 'text/html'
    // });
    // resp.end("<h1>/hello/01</h1>"); // body
});
 
router.route('/02').get(function(req,resp){
    const data ={
        no: req.query.no || '',
        email: req.query.email || ''
    };

    resp.render('hello/02', data); 
});

module.exports =router; 