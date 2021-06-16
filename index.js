'use strict';


const server = require('./src/server.js');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log('Server is Running'));