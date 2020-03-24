const conn = require('../database/connection');

module.exports = {
  async Index(request,reponse) {
    const ong_id = request.headers.authorization;
    const incidents = await conn('incidents')
    .join('ong','ong.id', '=','incidents.ong_id' )
    .where('ong_id',ong_id).select(['incidents.*',
    'ong.name',
    'ong.email',
    'ong.whatsapp',
    'ong.city',
    'ong.uf']).limit(5).offset((page - 1)*5);
      
    const [count] = await conn('incidents').select('*').count();
      
    reponse.header('X-Total-Count',count['count(*)']);
    reponse.header('X-Total-Pages-Count',count['count(*)'] / 5);   
          reponse.json(incidents);

    return reponse.json(incidents);
   }
};