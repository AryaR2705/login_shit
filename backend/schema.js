const mongoose = require('mongoose');

const user=new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    pass:{
        type: String,
        required:true
    },
    cpass:{
        type: String,
        required:true
    }
})
const user1=mongoose.model('user1',user);
module.exports = user1;