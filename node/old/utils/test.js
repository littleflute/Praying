const tag = "[utils/test.js_v0.0.1]";
const l = require('../../logger');
l.tag(tag + __dirname); 


const test = {
    v           : 'v0.0.1',
    author      : 'littleflute'
};

test.f1 = function(){
    return "f1";
}

module.exports = test;