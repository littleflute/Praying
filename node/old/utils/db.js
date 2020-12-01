const tag = "[utils/db.js_v0.0.3]";
var mysql = require('mysql');
const l = require('../../logger');
l.tag(tag + __dirname); 


const db = {};
db.test = function(){
    var r = "db.test...";

    return r;
}


module.exports = db;