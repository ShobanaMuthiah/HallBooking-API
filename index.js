import express from "express";
import cors from 'cors';
import createdetails from './Routers/CreateHallRouters.js';
import getdetails from './Routers/GetHallRouters.js'

const app=express();
const port=4000;

app.use(express.json());

app.use(cors({
}))

app.use('/api/hallbooking',createdetails) //api for create details or posting details to routes for hall booking details from the CreateHallRouters.js
app.use('/api/hallbooking',getdetails)  //api for getting the details from routes for hall booking details from the CreateHallRouters.js

app.get('/',(req,res)=>{
    res.status(200).send(`App is running successfully`)
})

app.listen(port,()=>{
    console.log("The app is running in the port",port);
})