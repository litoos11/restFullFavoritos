'use strict'

var express = require('express'),
		FavoritoController = require('../controllers/favorito'),
		api = express.Router();

api
	// .get('/prueba/:nombre?', FavoritoController.prueba)
	.get('/favorito/:id', FavoritoController.getFavorito)
	.get('/favoritos', FavoritoController.getFavoritos)
	.post('/favorito', FavoritoController.saveFavorito)
	.put('/favorito/:id', FavoritoController.updateFavorito)
	.delete('/favorito/:id', FavoritoController.deleteFavorito)


module.exports = api;