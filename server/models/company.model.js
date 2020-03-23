const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let  { Schema } = mongoose;

let companySchema = new Schema({
    name:{
        type: String,
        required: [true,"El nombre es necesario"],
    },
    id:{
        type: Number,
        required: [true,"El rut es necesario"],
        unique: true
    },
    description:{
        type: String,
    },
    Admin:[{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        autopopulate: true
    }]
});

companySchema.plugin(require('mongoose-autopopulate'));
companySchema.plugin in(uniqueValidator,{message:'{PATH} debe de ser unico'});

module.exports = mongoose.model('Company',companySchema);

