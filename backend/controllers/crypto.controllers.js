const crypto = require("../modelos/crypto.models.js")

const getCrypto = async (req, res)=>{
    try {
        const datos = await crypto.find();
        res.json(datos)
    } catch (error) {
        console.log(error);
    }
}

const postCrypto = async (req, res)=>{
    const CryptoBody = new crypto(req.body)
    try {
        const nuevoEquipo = await CryptoBody.save();
        res.json(nuevoEquipo);
    } catch (error) {
        console.log(error);
    }
}

const deleteCrypto = async(req, res)=>{
    try {
        await crypto.deleteOne({_id:req.params.id});
        res.status(200).send();
    } catch (error) {
        res.status(500);
        res.send({error:"Categoria no existe"});
    }
}

const patchCrypto = async (req, res)=>{
    try {
        const cryptoBODY = await crypto.findOne({_id:req.params.id});
        if (req.body.Nombre){
            cryptoBODY.Nombre = req.body.Nombre;
        }
        if (req.body.tipo){
            cryptoBODY.tipo = req.body.tipo;
        }
        await cryptoBODY.save();
        res.send(cryptoBODY);        
    } catch (error) {
        console.log(error);
    }
}

const getCryptoOne = async (req, res) => {
    try {
        const datos = await crypto.findOne({_id:req.params.id})
        res.json(datos)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getCrypto, deleteCrypto, postCrypto, patchCrypto, getCryptoOne}