const router = require('express').Router();
const {getSQLDateFormat} = require('../lib/sqlserver.js')

exports.insertFamilyStatement = async function(content,connection){
  var thisdate= getSQLDateFormat(content.date);
  console.log(thisdate);
  const POST_FAMILY_STATEMENT=`INSERT INTO homestatement (date,item,amount) VALUES('${thisdate}','${content.item}',${content.amount})`;
  connection.query(POST_FAMILY_STATEMENT,(err,results)=>{
    if(err){
      console.log(err);
      return false;
    }else{
      console.log("passed");
      return true;
    }
  })
};
