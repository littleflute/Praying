const router = require('express').Router();
const {getSQLDateFormat} = require('../lib/sqlserver.js')

exports.postPrayers = async function(content,connection){
  var thisdate= getSQLDateFormat(content.date);
  const POST_SINGLE_PRAYER=`INSERT INTO prays (date,nevent,message) VALUES('${thisdate}','${content.nevent}','${content.message}')`;
  console.log(POST_SINGLE_PRAYER);
  connection.query(POST_SINGLE_PRAYER, (err,results)=>{
    if(err){
      console.log(err);
      return false;
    }else{
      console.log('passed');
      return true;
    }
  })
};
