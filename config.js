// config.js
const dotenv = require('dotenv')

dotenv.config();

module.exports = {
  port: process.env.PORT,
  dbconnection: process.env.DB_URL,
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY
}