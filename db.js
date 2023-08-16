const mysql = require("mysql");
const mssql = require( 'mssql')
const {Sequelize} = require('sequelize')
const tedius = require('tedious').Connection;

//mssql.connect()
/*
const db2 = new Sequelize('estoque', 'root', '',{
    host: "localhost",
    dialect:'mysql'
})
*/

const db = new Sequelize('ROBOZAP', 'sistema', '27#*!Seg*',{
    host: "netuno",
    dialect:'mssql'
})




async () => {
    try {
        
        db.authenticate();
      console.log('conexão com o sql server!')
        
    } catch (err) {
        // ... error checks
        console.log(err)
    }
}


module.exports = db;