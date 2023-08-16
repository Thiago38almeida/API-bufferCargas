const express  = require ('express');
const cors = require ('cors');
const app = express()
const bodyParser = require('body-parser');
const useRouter = require('../servidor/routes/routes');


app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use("/", useRouter);




app.listen(3000)