import http from 'http'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router  from './AuthCRUD/Routes/route.js'
import express from 'express'
dotenv.config()
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/',router)

async function start() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    server.listen(port, console.log("Server is up and running at port",port));
  } catch (error) {
    console.log("Connection failed");
  }
}
start();