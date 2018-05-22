const express = require('express');
const router = express.Router();

const menuModel = require('../models/menuModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  
  

  res.render('layout',{ 
  	menu : menuModel.get,
  	views : 'services/index'
  })
});

module.exports = router;
