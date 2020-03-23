const { Router } = require('express');
const {HomeController} = require('../controllers/index');


    const router = Router();


    router.get("/",HomeController.index);
    router.get("/hola",HomeController.hola);

    
    module.exports = router;
