var db = require('../db');
var Joi = require('joi');
module.exports = [
{
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		reply("Test")
	}
},
{
	method: 'GET',
	path: '/users/{name}',
	config: {
		description: 'Get todo',
		notes: 'Returns a name by name passed in the path',
		tags: ['api, users'],
		validate: {
		    params: {
		        name: Joi.string()
		        		.min(3)
		                .required()
		   }
		},
		handler: function(request, reply){
			db.query('SELECT * FROM `books`', function(err, rows, fields) {
			  if (err) throw err;
			  //request.parans.name
			  reply({
			  	name: request.params.name,
			  	baza:rows
			  });
			});
		}
	}
}];