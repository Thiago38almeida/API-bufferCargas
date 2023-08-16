const db = require('../db');
const bufferProdutos = require('../models/bufferProdutos');



const getPallet = async (req, res) => {
   // const q = "select * from pallets"
 try {
    const query = await bufferProdutos.findAll()
   // console.log(query)
    res.status(200).json(query)
    
 } catch (error) {
    console.log('Error:', error);
    res.status(500).json({mensagem: 'erro ao buscar os dados!'});

    
 }
    
}

module.exports = getPallet;