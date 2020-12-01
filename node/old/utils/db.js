const tag = "[utils/db.js_v0.0.15]";
var mysql = require('mysql');
const cfg = require('../config/config');
const l = require('../../logger');
l.tag(tag + __dirname); 


const db = {};
db.connectTest = function(res){    
    var ci = cfg.getDbConInf(); 

    var con = mysql.createConnection(ci);

    con.connect(function(err) {
        if (err){
            res.send(err);  
        }   
        res.send("Connected");
    }); 
}
db.createDB = function(dbName,res){
    var ci = cfg.getDbConInf();
    var con = mysql.createConnection(ci);
      
    con.connect(function(err) {
        if (err){
            res.send(err);  
        }   
        con.query("CREATE DATABASE " + dbName, function (err, result) {
            if (err){
                res.send(err);  
            }   
            res.send(dbName + " Database created");
        });
    });
}

module.exports = db;