import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose  from "mongoose";

const app = express();      //create an express app 
dotenv.config();            //load env variables
app.use(express.json());     //parswe incoming JSON requests
app.use(cors({origin : "*"}));  //allow cross-origin requests(frontend can access backend)

//start the express server
const PORT = process.env.PORT || 3000;
app. listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
});
