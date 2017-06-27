'use strict'

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var FavositoSchema = Schema({
	title: String,
	description: String,
	url: String
});

module.exports = mongoose.model('Favorito', FavositoSchema);