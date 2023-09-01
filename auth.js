const express = require('express');
const router = express.Router();
require('./conn');
const collection = require("./schema")
const cors = require("cors")
const user1=require('./schema');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/",cors(),(req,res)=>{
    res.send('hello bitches')
})
router.post('/register',async(req,res)=>{

    const{username,pass,cpass}=req.body

    const data={
        username:username,
        pass:pass,
        cpass:cpass
    }

    try{
        const check=await collection.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }
});

router.post('/login1', async(req,res)=>{

    const{username,pass}=req.body

    try{
        const check1=await user1.findOne({username:username})
        const check2=await user1.findOne({pass:pass})
        if(check1 && check2){
            res.json("exist")
        }
        else if(!check1 || !check2){
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }
});
module.exports=router;


    // const{username,pass,cpass}=req.body;
    // // console.log(username);
    // // console.log(pass);
    // // res.json({message: req.body});
    // if(!username || !pass || !cpass)
    // {
    //     return res.status(422).json({error:"error: fill info !"});
    // }

    

    // try{
    //     const userExist=await user.findOne({username:username});
    //     if(userexits){
    //         return res.status(422).json({error:"username already exits"});
    //     }
    //     const user1 = new user({username, pass, cpass});

    //     await user.save();

    //     res.status(201).json({message:"you are registered !"});
    // }catch(err){
    //     console.log(err);
    // }