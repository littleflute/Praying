const tag = "[config/config.js_v0.0.12]";


const l = require('../../logger');
l.tag(tag + __dirname); 


const c = {
    
};
c.getDbConInf = function(){
    var i = {
        host         : 'ccccpraying.cepempio7fwp.us-east-2.rds.amazonaws.com',
        user         : 'admin1458',
        password     : 'doorlock1458' 
    };
    return i;
}    
c.getDbInf = function(){
    var i = {
        host         : 'ccccpraying.cepempio7fwp.us-east-2.rds.amazonaws.com',
        user         : 'admin1458',
        password     : 'doorlock1458',
        database     : 'ccccpraying'
    };
    return i;
}    

module.exports = c;