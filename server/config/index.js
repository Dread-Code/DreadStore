//======================
// PUERTo
//======================

process.env.PORT = process.env.PORT || 3000;

//======================
// VENCIMIENTO DEL TOKEN    
//======================
//60 SEGUNDOS
//60 MINUTOS
//24 HORAS
//30 DIAS
process.env.CADUCIDAD_TOKEN = '48h';


//======================
// SEED
//======================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//======================
// ENTORNO
//======================

process.env.NODE_ENV = process.env.NODE_ENV ||'dev';

//======================
// BASE DE DATOS
//======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/DreadStore';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.urlDB ='mongodb+srv://lucas:iUgQI6ekkeKTUWts@cluster0-hcdpy.mongodb.net/DreadStore';
