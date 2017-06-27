'use strict'

var Favorito = require('../models/favorito');

// function prueba(req, res){
// 	var nombre = (req.params.nombre) ? req.params.nombre : "SIN NOMBRE";

// 	res.status(200).send({
// 		data: [2,3,4],
// 		message: `Hola NodeJS y Express ${nombre}`
// 	});
// }

function getFavorito (req, res) {
	var favortioId = req.params.id;

	Favorito.findById(favortioId, (err, favorito)=>{
		if(err){
			res.status(500).send({message: 'Error al devolver el marcadores :-('});
		}else{
			if(!favorito){
				res.status(404).send({message: 'No hay favorito :-P'});
			}else{
				res.status(200).send({favorito});
			}			
		}
	})
}

function getFavoritos (req, res) {
	Favorito.find({}).sort('-_id').exec((err, favoritos)=>{
		if(err){
			res.status(500).send({message: 'Error al devolver los marcadores :-('});
		}else{
			if(!favoritos){
				res.status(404).send({message: 'No hay favoritos :-P'});
			}else{
				res.status(200).send({favoritos});
			}			
		} 
	})
}

function saveFavorito (req, res) {
	var favorito = new Favorito(),
			params = req.body;

	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStored)=>{
		if(err){
			res.status(500).send({message: 'Error del marcador favorito :-('});
		}else{
			res.status(200).send({favorito: favoritoStored});		
		}
	})

}

function updateFavorito (req, res) {
	var favortioId = req.params.id,
			update = req.body;

	// console.log(update)

	Favorito.findByIdAndUpdate(favortioId, update, (err, favoritoUpdate)=>{
		if(err){
			res.status(500).send({message: 'Error al actualizar el marcador favorito :-('});
		}else{
			res.status(200).send({favorito: favoritoUpdate});		
		}
	})
}

function deleteFavorito (req, res) {
	var favortioId = req.params.id;
	Favorito.findById(favortioId, (err, favorito)=>{
		if(err){
			res.status(500).send({message: 'Error al devolver el marcadores :-('});
		}else if(!favorito){
			res.status(404).send({message: 'No hay favorito :-P'});
		}else{
			favorito.remove((err)=>{
				if(err){
					res.status(500).send({message: 'Error al elimnar el marcador :-('});
				}else{
					res.status(200).send({message: 'El marcador se ha eliminado :-)'});					
				}
			})
		}
	})
}

module.exports = {
	// prueba, 
	getFavorito,
	getFavoritos,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}


