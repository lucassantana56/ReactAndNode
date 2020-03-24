const conn = require('../database/connection');

module.exports = {
    async index(request,reponse){
      const {page = 1} = request.query;  
      const incidents = await conn('incidents').select('*').limit(5).offset((page - 1)*5);
      const [count] = await conn('incidents').select('*').count();
      
      reponse.header('X-Total-Count',count['count(*)']);
      reponse.header('X-Total-Pages-Count',count['count(*)'] / 5);   
      reponse.json(incidents);
    },
    async create(request,reponse){

     const {title, description, value} = request.body;
     const ong_id = request.headers.authorization;

     console.log(title,description,value,ong_id);
     const result = await conn('incidents').insert({
          title,
          description,
          value,
          ong_id
      });

      return reponse.json(result);     
  },
  async delete(request,reponse){
      const { id } = request.params;
      const ong_id = request.headers.authorization;

      const incidents = await conn('incidents').where('id',id).select('ong_id').first();
      console.log(incidents.ong_id, ong_id,id);
      
      if(incidents.ong_id  != ong_id)
          return reponse.status(401).json({error: 'Operation not permitted'});
          
      await conn('incidents').where('id',id).delete();

      return reponse.status(204).send();
  }
};