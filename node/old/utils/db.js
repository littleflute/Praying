const tag = "[utils/db.js_v0.0.15]";
var mysql = require('mysql');
const cfg = require('../config/config');
const l = require('../../logger');
l.tag(tag + __dirname); 


const db = {};
db.test = function(){
    var r = "db.test...";
    var ci = cfg.getDbConInf();
    r += JSON.stringify(ci);

    var con = mysql.createConnection(ci);

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    return r;
}


module.exports = db;