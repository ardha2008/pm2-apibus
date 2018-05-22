const express = require('express');
const router = express.Router();
const pm2 = require('pm2');
const menuModel = require('../models/menuModel');
const async = require('async');
/* GET home page. */
router.get('/', function(req, res, next) {
  	var output = new Object;
	async.waterfall([
			function (callback){
				pm2.list(function(err,rows){
					if(err){
						output = {
							code : err.code,
							message : err.message
						}

						callback(output);
					}else{
						if(rows.length > 0 ){
							output = {
								code : '00',
								message : 'Retrieve Data',
								data : rows
							}

							callback(null,output)
						}else{
							output = {
								code : '404',
								message : 'No services running'
							}

							callback(output);
						}
					}
				})
			},function(data,callback){
				callback(null,data)
			}
		],function(err,result){
		if(err){
			var result_render = err; 
		}else{
			var result_render = result;
		}

		res.render('layout',{ 
			menu : menuModel.get,
			output : result_render,
			views : 'monitoring/index'
		})
	})

});

module.exports = router;
