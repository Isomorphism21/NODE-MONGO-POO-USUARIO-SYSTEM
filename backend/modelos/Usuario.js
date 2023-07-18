const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
   nombre: {
    type:String,
    required:[true, 'name is required']
   },
   
   email: {
    type:String,
    required:[true, 'Email is required'],
    unique: true
   },
   password: {
    type: String,
    required: [true, 'Password is required']
   },
   imagen :{
    type:String,
   },
   rol: {
    type:String,
    required: true,
    default: 'USER',
    
   },
   estado: {
    type:Boolean,
    default: true
   },
   googleSignIn: {
    type:Boolean,
    default: true
   }
})

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;