const conn = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request,reponse){
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
        console.log(name,email,id);
       await conn('ong').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        
        reponse.json({id});
    },
    async index(request,reponse){
        const ongs = await conn('ong').select('*');
        return reponse.json(ongs);
    },
    
}