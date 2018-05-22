var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

connection.connect(function(err){
    if(err){
        throw err
    }else{
        console.log('SUCCESSFULLY CONNECTED TO DB')
        connection.query('create database fromnode',function(err,suc){
            if(err){
                throw err
            }else{
                console.log('database created')
            }

        })
    }
})