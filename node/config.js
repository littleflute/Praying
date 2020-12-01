const tag = "[config.js_v0.0.11]";
const path = require('path');

const l = require('./logger');
l.tag(tag + __dirname); 

const config = {
  ROOT_DIR: __dirname,
  URL_PORT: 8080,//3000,
  URL_PATH: 'http://localhost',
  WEB_SOCKET_PORT: 9090,
  BASE_VERSION: 'v2',
  CONTROLLER_DIRECTORY: path.join(__dirname, 'controllers'),

  PRODUCTION: process.env.PRODUCTION,

  h: process.env.DB_HOST ? process.env.DB_HOST : "ccccpraying.cepempio7fwp.us-east-2.rds.amazonaws.com",//"localhost",
  u: process.env.DB_USER ? process.env.DB_USER : "admin1458",//"root",
  pw: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "doorlock1458",//"group6db",
  db: "g6DB",

  oLocalDB:{
    host: process.env.DB_HOST ? process.env.DB_HOST : "ccccpraying.cepempio7fwp.us-east-2.rds.amazonaws.com",//"localhost",
    user: process.env.DB_USER ? process.env.DB_USER : "admin1458",//"root",
    password: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "doorlock1458",//"group6db",
    database: "g6DB"
  }
};

config.OPENAPI_YAML = path.join(config.ROOT_DIR, 'api', 'openapi.yaml');
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`;
module.exports = config;
