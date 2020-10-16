const router = require('express').Router();
const {getSQLDateFormat} = require('../lib/sqlserver.js')

exports.insertProductStatement = async function(content,connection){
  var thisdate= getSQLDateFormat(content.date);

  var profit= (content.unitprice - content.unitcost) * content.quantity;
  const POST_PRODUCT1=`INSERT INTO products (purchasedate,seller,item,amount,method,unitcost,quantity,unitprice,profit) `
  const POST_PRODUCT2=`VALUES('${thisdate}','${content.seller}','${content.item}',${content.amount},'${content.method}',${content.unitcost},${content.quantity},${content.unitprice},${profit})`;
  const POST_PRODUCT_STATEMENT = POST_PRODUCT1+POST_PRODUCT2;
  connection.query(POST_PRODUCT_STATEMENT,(err,results)=>{
    if(err){
      console.log(err);
      return false;
    }else{
      return true;
    }
  })
};
