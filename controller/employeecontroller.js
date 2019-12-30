const express=require('express');
const app=express();
app.get('/', (req, res) => {
    res.render("Employee/addOrEdit", {
        viewTitle: "Insert Employee"
    });
});
app.post('/', (req, res) => {
    // if (req.body._id == '')
    //     insertRecord(req, res);
    //     else
    //     updateRecord(req, res);
    console.log(req.body);
});

module.exports=app;