const mongoose = require('mongoose');
// Create User Schema
const userSchema=mongoose.Schema({
    
    amount:{
        type:Number,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    
},
{
    timestamps:true
})

module.exports=mongoose.model('Transactions',userSchema)
