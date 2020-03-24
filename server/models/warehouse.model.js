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


});


warehouseSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('WareHouse', warehouseSchema);