import mongoose from "mongoose";
import dotenv from 'dotenv'

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async ()=>{
    const URL = 'mongodb://abhaypandey264209:AbhayPandey%40264209@ac-xr5w3c8-shard-00-00.v10ersx.mongodb.net:27017,ac-xr5w3c8-shard-00-01.v10ersx.mongodb.net:27017,ac-xr5w3c8-shard-00-02.v10ersx.mongodb.net:27017/?ssl=true&replicaSet=atlas-c2s41a-shard-0&authSource=admin&retryWrites=true&w=majority'
    try{
       await mongoose.connect(URL,{useUnifiedTopology: true});
       console.log('Database Connected Successfully');
    }catch(error){
        console.log('Error while connecting with database',error.message);
    }
}
export default Connection;