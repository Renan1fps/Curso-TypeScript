import express, { response } from "express";

const app = express();

app.get("/users", (require, response)=>{
    response.json({message: "Hello!"})
})

app.listen(8080,()=>{
    console.log("Back-end is running")
})

