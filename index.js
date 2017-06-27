'use strict'

var mongoose = require('mongoose'),
		app = require('./app'),
		port = process.env.PORT || 3002;

mongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res)=>{
	if(err){
		throw err;
	}else{
		console.log('Conexion a MongoDB correcto');
		app.listen(port, ()=>{
			console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
		});
	}
});
		