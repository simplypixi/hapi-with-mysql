var Inert = require('inert'),
	Vision = require('vision'),
	Hapi = require('hapi'),
	HapiSwagger = require('hapi-swagger');
 
var swaggerOptions = {
    info: {
        'title': 'Test API Documentation',
        'version': '1.0.0'
    },
    tags: [{
        'name': 'users',
        'description': 'Users data'
    }]
};

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': swaggerOptions
    }], function(err) {
        server.start(function() {
        	console.log("Server started.");
        });
    }
);

server.route(require('./routes/test.js'));
 