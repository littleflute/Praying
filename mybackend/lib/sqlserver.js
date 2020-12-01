const mysql = require('mysql')
const appURL = `http://localhost:4000/`;

var db_config = {
    host         : 'ccccpraying.cepempio7fwp.us-east-2.rds.amazonaws.com',
    user         : 'admin1458',
    password     : 'doorlock1458',
    database     : 'ccccpraying'
};

exports.sqlconnection = function(){
  const connection = mysql.createConnection(db_config);

  connection.connect(err =>{
    if(err){
      console.log("Database not connected")
      return err;
    }else {
      console.log("New connection established with the database")
    }
  });

  return connection;
};

exports.getSQLDateFormat = function(mdate){
  let date_ob=new Date(mdate);
  let year=date_ob.getFullYear();
  let month=date_ob.getMonth()+1;
  let date=date_ob.getDate()+1;
  //let tdate=new Date().toISOString().slice(0, 19).replace('T', ' ');
  let todaydate= year+'-'+month+'-'+date; //yyyy-mm-dd
  return todaydate;
}

exports.getGatewayURL = function(){
  return appURL;
}
