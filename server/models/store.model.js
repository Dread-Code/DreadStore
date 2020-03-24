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
<<<<<<< HEAD
        type:[Schema.Types.ObjectId],
        ref: 'User',
=======
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
>>>>>>> b115de2ff73de6ed4f685f66bc83d071ea1dbb61
        autopopulate: true
    }

});

storeSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model('Store', storeSchema);