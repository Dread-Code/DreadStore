const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let  { Schema } = mongoose;

let roles = {
    values : ['ADMIN_ROLE','USER_ROLE','EMPLOYEE_ROLE'],
    message: '{VALUE} no es un rol valido'
}

const userSchema = new Schema({
    name :{
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email:{
        type: String,
        unique:true,
        required: [true,'El correo es necesario']
    },
    password: {
        type: String,
        required: [true,'La contraseña es obligatoria']

    },
    role:{
        type:String,
        default: 'USER_ROLE',
        enum: roles
    },
    status:{
        type: Boolean,
        default:true
    }
});

UserSchema.methods.toJSON = function () {
    /**Cada vez que se lea un elemento user queremos 
     * que el campo contase;a sea eliminado
     */
    let user = this.toObject();
    delete user.password;
    return user;
}

userSchema.plug in(uniqueValidator,{message:'{PATH} debe de ser unico'});

module.exports = mongoose.model('User',userSchema);

