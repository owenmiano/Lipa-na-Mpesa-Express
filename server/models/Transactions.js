const mongoose = require('mongoose');
// Create User Schema
const userSchema=mongoose.Schema({
    receipt:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    
},
{
    timestamps:false
})

module.exports=mongoose.model('Transactions',userSchema)
