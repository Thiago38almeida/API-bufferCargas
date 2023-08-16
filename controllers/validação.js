const connect = require("../dbOracle");
const bufferProdutos = require("../models/bufferProdutos");

const validar = async (req, res) => {
  const { barcode1, barcode2, chute, quadrante } = req.body;
  const bd1 = `${barcode1}`;
  const bd2 = `${barcode2}`;
  

  console.log(req.body)
  const formatado = bd1.replace(/\\x1D/g, '#');
  
  console.log(bd1,formatado);


 // const formatado = bd1.replace(/\x1D/g, '#');
  
 // console.log(formatado);


  try {
    const connection = await connect();
    const query = await connection.execute(`
    select bdt_barcode, bdt_barcode_2, fba_extenal_id, fba_chute, fba_posicion  from srt_bdt_batch_detail 
join pick_fba_full_boxes_assign 
on fba_co_id = bdt_co_id
 WHERE bdt_barcode LIKE '${bd1}' 
 and bdt_barcode_2 like '${bd2}'
    `);


   //validar se a caixa foi encontrada
   
   if (query.rows.length === 0) {
    const response = await bufferProdutos.create({
      barcode1,
      barcode2,
      chute,
      quadrante,
      remessa: '0',
      rg_status: 'caixa não encontrada'
    });

   

    return res.status(400).json({ mensagem: "Caixa não encontrada com o tipo de dados enviado!" });
  } 
  else{

  //divergencias dos chute

  if (query.rows[0].FBA_CHUTE != chute ||
     query.rows[0].FBA_POSICION != quadrante) {
    const response = await bufferProdutos.create({
      barcode1,
      barcode2,
      chute,
      quadrante,
      remessa: '0',
      rg_status: 'divergencia nos chutes'
    });
    res.status(400).json({mensagem: 'chutes divergêntes', response})
  }
  //caso status 200 - sucesso
  else{

    //Caso encontre a caixa no banco de dados
        const response = await bufferProdutos.create({
          barcode1: query.rows[0].BDT_BARCODE,
          barcode2: query.rows[0].BDT_BARCODE_2,
          remessa: query.rows[0].FBA_EXTENAL_ID,
          chute: query.rows[0].FBA_CHUTE,
          quadrante: query.rows[0].FBA_POSICION,
          rg_status: 'Caixa encontrada'
        });


        res.status(200).json({mensagem:'regitro criado'});
      };
}
  
        
  }  catch (err) {

   res.status(400).json({ mensagem: "Erro interno do servidor", err});

            }           
};

module.exports = validar;
