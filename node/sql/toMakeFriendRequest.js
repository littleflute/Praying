const tag = "[sql/toMakeFriendRequest.js_v0.33]";
var mysql = require('mysql');
const config = require('../config'); 
const l = require('../logger');
const ULID = require('ulid');
const rSQL = require('../sql/SQL.js'); 

 l.tag(tag);
 
exports.toMakeFriendRequest = async function(oBody,resolve,Service){ 
    var sR = tag+ " [toMakeFriendRequest]--------- " + JSON.stringify(oBody);
    l.tag1(tag,sR); 

    var o = {};
    o.code = 1; 
    o.str = "toMakeFriendRequest...";
    
    var rTime = Date();
    var rID = ULID.ulid(rTime);
    var _sql = "INSERT INTO PendingFriends(RequestID,fromID,toID,status,request_time)VALUES ('";
    _sql += rID+ "','"+oBody.FromID+ "','"+oBody.ToID+ "','"+oBody.status+ "','"+rTime+ "' )" ;

    var ls = [];
    ls.push(_sql); 
    await rSQL._2RunSQLList(ls); 
    resolve(Service.successResponse(o));	 
} 
