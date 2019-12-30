const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDb',{useNewUrlParser:true},(err)=>{
    if(!err)
    {
        console.log("Database Connection successfull");
    }
    else
    {
        console.log("error",err);
    }
});
require('./schema');