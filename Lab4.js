const express= require('express');
const app = express();

let Students = require('./Students');

app.get('/Testing',(req,res)=>{
    res.send(Students);
});

app.listen(8080,()=>{
    console.log("Server Running On Port 8080...")
});

setInterval(()=>{
    console.log("Server Still Running...")
},500000);
