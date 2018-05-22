
var mysqldb=require('mysql')
var connection= mysqldb.createConnection({
host:'localhost',
user:'root',
password:'',
database:'fromnode'
})

connection.connect(function(err){
if(err){
throw err
}else{
console.log("SUCCESSFULLY CONNECTED TO DATABASE")
var sql="insert into friends(name,id,location) values ?"
var records = [
    ['b',2,'abc'],
    ['c',3,'wer'],
    ['e',4,'knn']
]
connection.query(sql,[records],function(err,suc){
if(err){ 
throw err
}else{
console.log("multiple rows entered")
}
})
}
}) 
