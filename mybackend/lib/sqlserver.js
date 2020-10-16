const mysql = require('mysql')

var db_config = {
    host         : 'localhost',
    user         : 'root',
    password     : '9112345',
    database     : 'homerecords'
};

exports.sqlconnection = function(){
  const connection = mysql.createConnection(db_config);

  connection.connect(err =>{
    if(err){
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
