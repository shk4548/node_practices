const express = require('express');

const router = express.Router();

router.route('').get(function(req,resp){
    resp.render('main/index') // view engine
});


module.exports =router; 