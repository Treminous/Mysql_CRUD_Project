//import mysql
const mysql=require('mysql');
//create connection
const conn=mysql.createConnection(
    {
    host:'localhost',
    user:'root',
    password:'',
    database:'node_mysql_crud'
    }
);
conn.connect(function(error)
{
    if(error) throw error
    {
     console.log('Connection successful!!');
    }
})
module.exports=conn;