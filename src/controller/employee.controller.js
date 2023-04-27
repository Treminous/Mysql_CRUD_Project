
// import employee mode
const empModel=require('./model/employee.model');
exports.getEmployees=(req,res)=>
{
    res.json({
        "status":0,
        "message":"listing employees"
    })
}
;


exports.updateEmployee=(req,res)=>
{
    res.json({
        "status":0,
        "id":req.params.id,
        "message":"update  employee"
    })
}
;
exports.viewEmployeeDetails=(req,res)=>
{
    res.json({
        "status":0,
        "id":req.params.id,
        "message":"View employee"
    })
}
;