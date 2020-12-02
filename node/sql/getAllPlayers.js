const tag = "[sql/getAllPlayers.js_v0.14]";
var mysql = require('mysql');
const config = require('../config'); 
const l = require('../logger');

 l.tag(tag);
 
exports.getAllPlayers = function(resolve,Service){ 
    var sR = tag+ " [getAllPlayers]--------- " + Date();
    l.tag1(tag,sR);
 
    var _sql = "SELECT * FROM Group6Users";

    var con = mysql.createConnection({ host: config.h, user: config.u, password: config.pw,  database: config.db});
    con.connect();
	con.query(_sql, function (err, result, fields) {
      if (err)   {
        console.log(err);  
        console.log(err.sqlMessage);  
        sR = err.sqlMessage;
        resolve(Service.successResponse(sR));    
      } 
      else{ 
          sR = result;
          var o = {};
          o.code = 1;
          o.n = result.length;
          o.str = result;
         resolve(Service.successResponse(o));           
      }         
    }); 
	con.end();
    return sR;
} 
