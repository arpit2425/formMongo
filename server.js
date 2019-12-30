require('./models/db');
const express=require('express');
const app=express();
const bodyparser = require('body-parser');
const path=require('path');
const exphd=require('express-handlebars');
const employeecontroller=require('./controller/employeecontroller');
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs', exphd({ extname: 'hbs', defaultLayout: 'mainlayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
app.listen(3000,()=>{
    console.log("App Started");
})
app.use('/Employee',employeecontroller);