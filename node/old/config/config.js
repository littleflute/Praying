const tag = "[config/config.js_v0.0.1]";
const l = require('../../logger');
l.tag(tag + __dirname); 


const config = {
    host         : 'ccccpraying.cepempio7fwp.us-east-2.rds.amazonaws.com',
    user         : 'admin1458',
    password     : 'doorlock1458',
    database     : 'ccccpraying'
};

module.exports = config;