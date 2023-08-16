const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const OracleDB = require('oracledb');
const sql = require('mssql/msnodesqlv8')
//const { Model } = require('sequelize');

async function connect() {
  try {
    const connection = await OracleDB.getConnection({
      user: "mundial",
      password: "mundial",
      connectString: "172.18.0.78/WMSPRD",
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
