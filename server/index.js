import express from 'express';
import cors from 'cors'
import Route from './routes/route.js';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/',Route);
Connection(username, password);
const PORT = 8000;

app.listen(PORT,()=>console.log(`server is running successfully on PORT ${PORT}`));