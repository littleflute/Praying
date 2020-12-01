const tag = "[utils/db.js_v0.0.13]";
var mysql = require('mysql');
const cfg = require('../config/config');
const l = require('../../logger');
l.tag(tag + __dirname); 


const db = {};
db.test = function(){
    var r = "db.test...";
    r += JSON.stringify(cfg.getDbInf());

    return r;
}


module.exports = db;