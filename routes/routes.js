const express = require("express");
const getPallet = require('../controllers/pallets');
const getUsers =  require('../controllers/users');
const InsertUser = require("../controllers/insertUser");
const authLogin = require("../controllers/authLogin");
const mundialCaixas = require("../controllers/mundial");
const validar = require("../controllers/validação");
const getRemessa = require("../controllers/remessa");

const route = express.Router();

route.get("/barcodes", getPallet )
route.get("/usuarios", getUsers )
route.get("/remessa/:id", getRemessa )
route.post("/insertP", InsertUser)
route.post("/login", authLogin)
route.get( '/caixas', mundialCaixas)
route.post( '/barcode', mundialCaixas)
route.post( '/validar', validar)



module.exports = route;