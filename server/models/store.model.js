const mongoose = require('mongoose');

let { Schema } = mongoose;

let storeSchema = new Schema({
    name:{
        type: String,
        required: [ true, 'Se requiere el nombre de la sede']
    },
    adress:{
        type: String,
        required: [true, 'Se requiere la direccion de la sede']
    },
    user:{
        type:[Schema.Types.ObjectId],
        ref: 'User',
        autopopulate: true
    }

});

storeSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model('Store', storeSchema);