const tag = "[t3.test.js_v0.31]";
const config = require('../config'); 
const ExpressServer = require('../expressServer');
const ES = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
const request = require('supertest'); 
var assert = require('chai').assert; 
var testData = require('../auth/data/testData.js');
var ds = testData.getUserDatas("p",5); 
var ts = "auto test 3:";
ts += "login & getAllUsers  "; 

describe(ts, function() { 
    var token = "";
    var n = 1; 
    it('Test 3.'+n+': login.', function() {     
          return request(ES.app)
            .post('/api/login')
            .send(ds[1])
            .set('accept', 'application/json')
            .set('Content-Type','application/json')
            .expect('Content-Type', /json/)
            .expect(200) 
            .then(response => {
                  console.log(tag + "****************** respoinse.body=", response.body);
                  var s = "";
                  s += 'response.body.code = ' + response.body.code; 
                  token = response.body.token;
                  assert(response.body.code == 1, s );  
          }) 
    });   

    n++;
    var allPlayers = null;
    it('Test 3.'+n+': getAllPlayers.', function() {    
      return request(ES.app)
        .get('/api/getAllPlayers')
        .send(ds[1])
        .set('accept', 'application/json')
        .set('Authorization','Bearer ' + token) 
        .expect(200) 
        .then(response => {
          console.log(tag + "****************** token=", token);      
          //var s = "allPlayers= " + response.body.str;          eval(s);
          allPlayers = response.body.str;
          for(i in ds){
            assert(ds[i].UserName==allPlayers[i].UserName,allPlayers[i].UserID);   
          }   
      }) 
    });     
    
  
    
});
