const mongoose = require('mongoose');

let { Schema } = mongoose;

let warehouseSchema = new Schema({
    name:{
        type: String,
        default: 'Bodega'
    },
    adress:{
        type: String,
        required: [true, 'Ingrese la ubicacion de la bodega'],
    },
<<<<<<< HEAD
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate: true
    },
    stores:{
        type: [Schema.Types.ObjectId],
        ref: 'Store',
        autopopulate: true
    },
    products:{
        type: [Schema.Types.ObjectId],
        ref: 'Products',
        autopopulate: true
    }
    
=======
    company:{
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
        autopopulate: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate: true
    }
>>>>>>> b115de2ff73de6ed4f685f66bc83d071ea1dbb61


});


warehouseSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('WareHouse', warehouseSchema);