const conn = require('../database/connection');

module.exports = {
    async Create(request,response){
        const {id} = request.body;

        const ong = await conn('ong').where('id',id).select('name').first();

        if(!ong)
          return response.status(400).json({error: "No ONG founded with this ID"});

        return response.json(ong);
    }
};