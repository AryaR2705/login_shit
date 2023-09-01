const mongoose = require('mongoose');


const DB ='mongodb+srv://arya:arya@mobie.fcnh2fj.mongodb.net/mobie?retryWrites=true&w=majority';
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("connection Ok!");
}).catch((err)=>{
    console.log("error 404");
})