const mongoose=require('mongoose');
var employeeSchema=new mongoose.Schema({
    fullname:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:String
    },
    City:{
        type:String
    },
});
mongoose.model("Employee",employeeSchema);