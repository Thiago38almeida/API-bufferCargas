const { STRING, INTEGER } = require('sequelize');
const db = require('../db');


const Users = db.define('usuarios', {
    user: {
        type:STRING,
        unique:true,
    },
    senha:{
        type : STRING,

        },
    chute: {
        type:INTEGER,
               
    }

})

Users.sync();

module.exports=Users;