const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const OracleDB = require('oracledb');
const sql = require('mssql/msnodesqlv8')
//const { Model } = require('sequelize');

async function connect() {
  try {
    const connection = await OracleDB.getConnection({
      user: "sistem",
      password: "<PASSWORD>",
      connectString: "localhost/WMSPRD",
    });
   
    console.log('Connected successfully oracle!');
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
}



connect();

module.exports =  connect;


//run();
