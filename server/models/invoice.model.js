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
    products:{
        type: [Schema.Types.ObjectId],
        required: true,
        autopopulate: true
    },
    subtotal:{  
        type: Number,
        required: true
    },
    iva:{
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate: true
    }
});


invoiceSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Invoice',invoiceSchema);