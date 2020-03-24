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
    


});


warehouseSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('WareHouse', warehouseSchema);