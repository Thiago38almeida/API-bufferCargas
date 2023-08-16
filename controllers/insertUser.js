const Users = require('../models/user');



const InsertUser = async (req, res) => {

    const dados = req.body;

    try {
    const CreateUser = await Users.create(dados)
        res.status(200).json(CreateUser)
    } catch (error) {
        console.log('Erro ao criar usuário', error);
        return res.status(400).json({mensagem: 'erro ao criar usuario'})
        
    }
    
}

module.exports = InsertUser;