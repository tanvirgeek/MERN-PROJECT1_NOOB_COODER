const express = require('express');
const mongoose = require('mongoose');
const body_paeser = require('body-parser');

const app = express();
app.use(body_paeser.json());

//routes
const employee = require('./routes/employee');
app.use('/employee', employee);

mongoose.connect('mongodb://localhost:27017/noob_cooder_mern',{
    useNewUrlParser: true,
    useFindAndModify: false
}, (err)=>{
        if(err){
            console.log('unable to connet to database');
            process.exit(1);
        }else{
            console.log("successfully conneted to database");
        }
    }
)

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`app is running on port: ${port}`);
});