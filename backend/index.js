import express from "express";
import { PORT } from "./config.js";
const app =express()


app.get('/',(req, res)=>{
    console.log(req);
    res.send('welcome page')
})

const port= PORT
app.listen(port, ()=>{
    console.log(`'server started at port ${port} localhost://http${port}'`);
})