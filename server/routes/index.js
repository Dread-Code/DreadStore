const express = require('express');
const cors = require('cors');
const helmet = require('helmet');// proteccion de las rutas
const compression = require('compression');// ayuda a comprimir las peticionas HTTP para que sean mas rapidas
const morgan = require('morgan');// morgan sirve apra recibir las notificasiones req
require('express-async-errors');//ayuda a capturar las excepsiones asincronas

const {HomeRoutes} = require('./index.routes')

const router = express.Router();
const apiRoutes = express.Router();

apiRoutes
    .use(cors())
    .use(helmet())
    .use(morgan('combined'))
    .use(compression());

    apiRoutes.use("/home",HomeRoutes);

    router.use("/api",apiRoutes);

module.exports = router;