const express = require('express');
const port = 8000;
const app = express();

app.get('/',(req,res)=>{
    res.send("working properly");
})

app.listen(port,()=>{
    console.log('listening  ');
})