
const  db = require( '../db');
const Users = require('../models/user');
const getUsers = require('./users');




const authLogin = async (req, res) => {

    const {user, senha} = req.body;
  
    try {
    const users = await Users.findOne({
      where: {
        user: user
        },
    })
   // console.log(users.senha,senha)

    if(user === users.user && users.senha === senha) {
      return res.status(200).json(users)
    }
    else{
    console.log("usuario ou senha invalidos")

    res.status(400).json('usuario ou senha invalidos')
    }
      
    } catch (error) {
    return res.status(404).json({mensagem: 'erro interno no servidor'})
  }  

}
module.exports = authLogin;