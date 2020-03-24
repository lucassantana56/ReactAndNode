const express = require('express');

const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ong/',ongController.index);
routes.post('/ong/create',ongController.create);

routes.get('/incident/',incidentsController.index);
routes.post('/incident/create',incidentsController.create);
routes.delete('/incident/delete/:id',incidentsController.delete);

routes.get('/Profile/',profileController.Index);

routes.post('/session/Login',sessionController.Create);
module.exports = routes;