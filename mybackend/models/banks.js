const router = require('express').Router();
const {getSQLDateFormat} = require('../lib/sqlserver.js')

exports.updateBankStatement = async function(content,connection){
  const ALTER_BANK_STATEMENT_QUERY=`UPDATE bankstatement SET accountbalance=accountbalance+'${content.amount}',availablecredit=creditlimit-accountbalance WHERE (bankaccount = '${content.method}')`;
  connection.query(ALTER_BANK_STATEMENT_QUERY,(err,results)=>{
    if(err){
      return false;
    }else{
      return true;
    }
  })
};
