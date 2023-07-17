const mongoose = require(`mongoose`);

const connectionDB = async () => {
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        const url = `Inicializado en el ${connectDB.connection.host} en el puerto ${connectDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectionDB;