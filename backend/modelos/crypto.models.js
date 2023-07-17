const mongoose = require(`mongoose`);

    const mongooseSchema = mongoose.Schema({
        Nombre: {
            type:String,
            required:true,
            trim:true
        },
        tipo: {
            type:String,
            required:true,
            trim:true
        }
        },
        {
            timestamps:true
        }
    )
    const crypto = mongoose.model("Crypto", mongooseSchema);


module.exports = crypto