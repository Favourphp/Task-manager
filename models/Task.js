const mongoose = require('mongoose')





const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name must be provided'],
        trim:true,
        maxlength:[20,'name must not be more than 20 characters'],
    },
     completed:{
        type: Boolean,
        default:false,
     },
})

module.exports = mongoose.model('Task',TaskSchema)