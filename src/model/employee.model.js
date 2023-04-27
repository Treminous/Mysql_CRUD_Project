//Import database
var conn=require('../../config/db.config');
//Access database
var employees=(employee)=>
{
    this.first_name=employee.first_name;
    this.last_name=employee.last_name;
    this.email=employee.email;
    this.phone=employee.phone;
    this.organization=employee.organization;
    this.designation=employee.designation;
    this.salary=employee.salary;
    this.status=employee.status ? employee.status:1;
    this.created_at=new Date();
    this.updated_at=new Date();
}
//Get all employees
employees.getEmployees=(result)=>{
conn.query=('SELECT * FROM employees', (err,res)=>{
if(err)
{
    console.log('Error while fetching employees',err);
    result(null,err);
}
console.log('Employees fetched successful');
result(null, res);
}
);
}