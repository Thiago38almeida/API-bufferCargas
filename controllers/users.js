const db = require("../db");
const Users = require("../models/user");


const getUsers = async (req, res) => {
   

    try {

        const users = await Users.findAll()

       // console.log(users)
        res.status(200).json(users)        
    } catch (error) {
        res.status(400).json({erro: 'Erro os buscar usuarios'})
    }
}

module.exports = getUsers;




