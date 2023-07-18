const mongoose = require('mongoose');

const rolSchema = mongoose.Schema({
    rol: {
        type: String,
        required: [true, 'EL rol es Obligarotio']
    }
});

const Rol = mongoose.model('roles', rolSchema);

module.exports = Rol