const express=require('express');
const router=express.Router();
//import employee controller
const empController=require('../controller/employee.controller.js');
//Create root route
router.get('/listing', empController.getEmployees);

router.get('/update/:id', empController.updateEmployee);
router.post('/:id', empController.viewEmployeeDetails);


module.exports=router;