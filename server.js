import express from "express";  //runs server
import cors from "cors";        //let frontend talk to backend
import dotenv from "dotenv";    //reads form .env
import mongoose  from "mongoose";   //talk to MongoDB

const app = express();      //create an express app 
dotenv.config();            //load env variables
app.use(express.json());     //parswe incoming JSON requests
app.use(cors({origin : "*"}));  //allow cross-origin requests(frontend can access backend)

//test route
app.get('/', (req, res) => {
    res.json({ message: "Gunasho is runnig"})
});

//connect to MongoDB
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err.message)
    console.log("Failed to connect to MongoDB")
});

//start the express server
const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
});
