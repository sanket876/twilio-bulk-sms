module.export = function(app) {
	app.get('/', function(request, response) {
		response.send('Hello World!');
	});

	app.get('/:username/:password', function(request, response) {
		req.params.username
		req.params.password
	});
}