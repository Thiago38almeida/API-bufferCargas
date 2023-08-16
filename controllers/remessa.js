const { Op } = require('sequelize');
const db = require('../db');
const bufferProdutos = require('../models/bufferProdutos');



const getRemessa = async (req, res) => {
   
    const {id} = req.params
    console.log(id)
 try {
    const query = await bufferProdutos.findAll({
        where: {
        remessa: {
            [Op.like]: `%${id}%`
        }
    }
    })
   // console.log(query)
    res.status(200).json(query)
    
 } catch (error) {
    console.log('Error:', error);
    res.status(500).json({mensagem: 'erro ao buscar os dados por remessa!'});

    
 }
    
}

module.exports = getRemessa;