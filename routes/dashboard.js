const express = require('express');
const router = express.Router();

const menuModel = require('../models/menuModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('layout',{ menu : menuModel.get})
});

module.exports = router;
