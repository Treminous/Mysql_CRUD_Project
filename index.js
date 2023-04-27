//import expresss
const express=require('express');
//create express app
const app=express();

//create server port
const port=process.env.PORT || 8080;
//create route route
app.get('/',(req,res)=>
{
    res.send('Hello NodeJs ');

}
);
//import employee route
const employeeRoute=require('./src/route/employee.route.js');
//Create employee route(Api)
app.use('/api/v1/employee', employeeRoute);
//Listen to port
app.listen(port,()=>
{
console.log(`Server is running at port ${port}`);
});