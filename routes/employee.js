const express = require('express');
const employeeRouter = express.Router();
const EmplyeeModel = require("../models/Employee");

//Read
employeeRouter.get('/',(req,res)=>{
    EmplyeeModel.find({},(err,response)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: "Unable to get Employess",
                msgError : true
            }})}
        else{
            res.status(200).json(response);
        }
    });
});
//Create
employeeRouter.post('/',(req,res)=>{
    const employee = new EmplyeeModel(req.body);
    employee.save((err,document)=>{
        if(err){
            res.status(500).json({
                message:{
                    msgBody:"unable to add emplyee",
                    msgError: true
                }
            })
        }else{
            res.status(200).json({message:{
                msgBody: "Employee successfully added",
                msgError: false
            }})
        }
    })
});

//Delete
employeeRouter.delete('/:id',(req,res)=>{
    EmplyeeModel.findByIdAndDelete(req.params.id,err =>{
        if(err){
            res.status(500).json({message:{
                msgBody:"Uanble to delete",
                msgError: true
            }})
        }else{
            res.status(200).json({message:{
                msgBody:"Successfully Deleted",
                msgError: false
            }})
        }
    })
})
//update 
employeeRouter.put(':id', (req,res)=>{
    EmplyeeModel.findOneAndUpdate(req.params.id, req.body, {runValidators:true}, (err,response)=>{
        if(err){
            res.status(500).json({message:{
                msgBody:"Uanble to Update Emplyoee",
                msgError: true
            }})
        }else{
            res.status(200).json({message:{
                msgBody:"Successfully updated Employee",
                msgError: false
            }})
        }
    })
})

module.exports = employeeRouter;