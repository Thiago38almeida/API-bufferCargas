const connect = require("../dbOracle");
const bufferProdutos = require("../models/bufferProdutos");

const mundialCaixas = async (req, res) => {
  const { barcode1, barcode2 } = req.body;
  const bd1 = `${barcode1}`;
  const bd2 = `${barcode2}`;
console.log(req.body)
  try {
    const connection = await connect();
    const query = await connection.execute(`
      SELECT bdt_barcode, bdt_barcode_2 FROM srt_bdt_batch_detail
      WHERE bdt_barcode LIKE '${bd1}'
      AND bdt_barcode_2 LIKE '${bd2}'
    `);

    console.log(query.rows.length);

    if (query.rows.length > 0) {
      try {
        const response = await bufferProdutos.create({
          barcode1: query.rows[0].BDT_BARCODE,
          barcode2: query.rows[0].BDT_BARCODE_2,
        });

        // Combine the data into a single object to send as response
        const responseData = {
          message: 'Dados armazenados',
          createdData: response,
          queryResult: query.rows,
        };

        res.status(200).json(responseData);
      } catch (err) {
        res.status(400).json({ error: "Erro ao salvar no banco de dados", details: err });
      }
    }
    else{
      return res.status(400).json('Caixa não encontrada!')
    }

    connection.release(); // Release the connection back to the pool
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: "An error occurred while executing the query." });
  }
};

module.exports = mundialCaixas;
