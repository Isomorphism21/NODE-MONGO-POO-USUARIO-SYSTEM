require('dotenv').config();
const connectDB = require("./config/config.js")

const Server = require(`./models/server.js`)

const server = new Server();
connectDB();
server.listen();