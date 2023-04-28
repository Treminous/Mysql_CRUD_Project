const express=require('express');
const rout=express.Router();
//import employee controller
const empController=require('../controller/employee.controller');
//Create root route
rout.get('/', empController.getEmployees);

//router.get('/update/:id', empController.updateEmployee);
// router.post('/:id', empController.viewEmployeeDetails);


module.exports=rout;