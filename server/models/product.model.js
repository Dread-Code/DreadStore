const mongoose = require('mongoose');
let { Schema } = mongoose;

let productSchema = new Schema({
    name:{
        type: String,
        required:[true,'El nombre es necesario']
    },
    details:{
        type: String,
        required: [true, 'Brinda una breve descripcion del producto']
    },
    barscode:{
        type: Number,
        required:[true, 'Introduzca un codigo de barras'],
        unique: true
    },
    price:{
        type: Number,
        required: [true, 'Debe ingresar un precio del producto']
    },
    date:{
        type: Date,
        required: [true, 'Debe ingresar una fecha']
    },
    url:{
        type: String,
        required: [true, 'Debe ingresar el url del producto']
    },
    warehouse:{
        type: Schema.Types.ObjectId,
        ref: "warehouse",
        required: true,
        autopopulate: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        autopopulate: true
    }
});

productSchema.plugin(required('mongoose-autopopulate'));
productSchema.plugin in(uniqueValidator,{message:'{PATH} debe de ser unico'});

module.exports = mongoose.model('Product',productSchema);