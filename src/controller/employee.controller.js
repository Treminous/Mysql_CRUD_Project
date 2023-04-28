
// import employee mode
const empModel=require('../model/employee.model');
// get all employees
exports.getEmployees=(req,res)=>{

    empModel.getAllEmployees((error,employees)=>
    {
     console.log('We are here');
    // if (error) 
    
    // res.send(error);  
    // console.log('Employees',employees);
    // res.json({

    //     "employee": employees
    // });

    }
    
    );
};
  
    
      
  
    
      
       

 

    // res.json({
    //     "status":0,
    //     "message":"listing employees"
    // })
// }
// ;


// exports.updateEmployee=(req,res)=>
// {
//     res.json({
//         "status":0,
//         "id":req.params.id,
//         "message":"update  employee"
//     })
// }
// ;
// exports.viewEmployeeDetails=(req,res)=>
// {
//     res.json({
//         "status":0,
//         "id":req.params.id,
//         "message":"View employee"
//     })
// }
// ;