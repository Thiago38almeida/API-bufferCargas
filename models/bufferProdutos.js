const { STRING, INTEGER } = require('sequelize');
const db = require('../db');


const bufferProdutos = db.define('BufferBarcodes', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement:true,

    },
    barcode1: {
        type: STRING,
        allowNull: false
    },
    barcode2:{
        type:STRING,
        allowNull: false
    },
    remessa: {
        type:INTEGER,
        //references:'Remessas(id)',
        allowNull: false,

    },
    chute: {
        type:INTEGER,//referencia para tabela de Chutes
        allowNull: false
    },
    quadrante: {
        type:INTEGER,
        allowNull: false
        
    },
    rg_status: {
        type: STRING,
        allowNull: false

    }
   

})

bufferProdutos.sync()


module.exports = bufferProdutos;