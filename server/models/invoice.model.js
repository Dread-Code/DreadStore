const mongoose = require('mongoose');

let { Schema } = mongoose;

let invoiceSchema = new Schema({
    store:{
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true,
        autopopulate: true
    },
    date:{
        type: Date,
        required: [true, 'La fecha es requerida']
    },
<<<<<<< HEAD
=======
    products:{
        type: [Schema.Types.ObjectId],
        required: true,
        autopopulate: true
    },
    subtotal:{  
        type: Number,
        required: true
    },
>>>>>>> b115de2ff73de6ed4f685f66bc83d071ea1dbb61
    iva:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
<<<<<<< HEAD
    invoiceDetail:{
        type: Schema.Types.ObjectId,
        ref: '',
        required: true,
        autopopulate: true
    },
=======
>>>>>>> b115de2ff73de6ed4f685f66bc83d071ea1dbb61
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate: true
    }
});


invoiceSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Invoice',invoiceSchema);