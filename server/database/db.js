import mongoose from "mongoose";
import dotenv from 'dotenv'

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const db_url = process.env.DATABASE_URL;

const Connection = async ()=>{
    const URL = db_url;
    try{
       await mongoose.connect(URL,{useUnifiedTopology: true});
       console.log('Database Connected Successfully');
    }catch(error){
        console.log('Error while connecting with database',error.message);
    }
}
export default Connection;