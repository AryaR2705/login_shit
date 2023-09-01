const express = require('express');
const mongoose = require('mongoose');
const app =express();
app.use(express.json());
require('./conn');
app.use(require('./auth'));


app.get('/login1',(req, res)=>{
    res.send('login page');
});

app.get('/register',(req,res)=>{
    res.send('register page');
});


app.get('/home',(req,res)=>{
    res.send('homepage');
});

app.listen(3000,()=>{
    console.log("running on port 3000");
});