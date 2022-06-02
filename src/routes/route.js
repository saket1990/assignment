const express = require('express');
const externalModule=require('./logger')
const externalModule1= require('../validator/formatter.js')
const externalModule2 = require('../logger/logger.js');
const externalModule3 = require('../util/helper.js');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    console.log(externalModule2.x)
    externalModule2.x
    res.send('hi first assignment')
});

router.get('/test-me2', function (req, res) {
    console.log('date'+externalModule.date)
    console.log('month'+externalModule.month)
    console.log(info)
    externalModule3.date
    externalModule3.month
    externalModule3.info
    res.send('current date,current month,info')
});

router.get('/test-me3', function (req, res) {
    console.log(a);
    console.log(b);
    console.log(c);
    externalModule1.a
    externalModule1.b
    externalModule1.c
    res.send('hi we r formtting string')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason