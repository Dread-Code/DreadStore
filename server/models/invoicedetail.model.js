const mongoose = require('mongoose');

let { Schema } = mongoose;

let invoiceDetailSchema = new Schema({
    productos:{
        type: [{
            producto: Schema.Types.ObjectId,
            cantidad:{
                type: Number,
                required: true
            },
            subtotal:{
                type: Number
            }
        }]
    },
    totalproducts: {
        type: Number
    }

});

invoiceDetailSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('InvoiceDetail',invoiceDetailSchema);