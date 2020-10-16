const router = require('express').Router();
const {sqlconnection,getSQLDateFormat} = require('../lib/sqlserver.js')
const { updateBankStatement } = require('../models/banks.js');
const { insertFamilyStatement } = require('../models/homes.js');
const { insertProductStatement } = require('../models/products.js');

const SELECT_ALL_BANK_STATEMENT = `SELECT * FROM bankstatement`;
const SELECT_ALL_FAMILY_STATEMENT = `SELECT * FROM homestatement`;
const SELECT_ALL_PRODUCT_STATEMENT = `SELECT * FROM products`;
var connection=sqlconnection();

router.get('/bankstatement/alter/',async (req,res)=>{
  console.log(req.query);

  try{
    const task1= await updateBankStatement(req.query,connection);
    const task2= await insertFamilyStatement(req.query,connection);
    if(task1 && task2){
      return res.send('Successfully changed bank statement')
    }else{
      res.status(403).send({
      error: "Error inserting into DB! Check your SQL grammar"
    });
  }
  }catch(err){
    res.status(403).send({
    error: "404 Not Found"
    });
  }

})

router.get('/products/alter/',async (req,res)=>{
  console.log(req.query);

  try{
    const task1= await updateBankStatement(req.query,connection);
    const task2= await insertProductStatement(req.query,connection);
    if(task1 && task2){
      return res.send('Successfully changed bank statement')
    }else{
      res.status(403).send({
      error: "Error inserting into DB! Check your SQL grammar"
    });
    }
  }catch(err){
    res.status(403).send({
    error: "404 Not Found"
    });
  }

})


router.get('/bankstatement', (req,res) =>{
  connection.query(SELECT_ALL_BANK_STATEMENT, (err, result)=>{
    if(err){
      console.log(err);
      return res.send(err)
    }else{
      console.log(result);
      return res.json({
        data: result
      })
    }
  });
});

router.get('/familystatements',(req,res)=>{
  connection.query(SELECT_ALL_FAMILY_STATEMENT, (err, result)=>{
    if(err){
      return res.send(err)
    }else{
      return res.json({
        data: result
      })
    }
  });
})

router.get('/productstatements',(req,res)=>{
  connection.query(SELECT_ALL_PRODUCT_STATEMENT, (err, result)=>{
    if(err){
      return res.send(err)
    }else{
      return res.json({
        data: result
      })
    }
  });
})


module.exports = router;
