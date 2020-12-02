const router = require('express').Router()
const {sqlconnection,getSQLDateFormat,getGatewayURL} = require('../lib/sqlserver.js')
const {postPrayers} = require('../models/prayers.js')

const SELECT_ALL_PRAYER_STATEMENT = `SELECT * FROM prays`;
var connection=sqlconnection();

router.get('/ccccMembers', function (req, res) {
  connection.query("SELECT * FROM ccccMembers",(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.send(results)
    }
  })
});

router.post('/prayers',async (req,res)=>{
  console.log(req.query);
  console.log("post!");
  try{
    const task= await postPrayers(req.query,connection);
    if(task){
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

router.get('/prayers', (req,res) =>{
  connection.query(SELECT_ALL_PRAYER_STATEMENT, (err, result)=>{
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


module.exports = router;
