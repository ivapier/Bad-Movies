const mysql = require('mysql');
const options = require('../config.js');

const connection = mysql.createConnection(options);

connection.connect();
