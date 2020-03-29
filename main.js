const http = require('http')
const port = 9911

const server = http.createServer(function(req,res) {
	res.write('Hello Node')
	res.end()
})

server.listen(port, function(error) {
	if(error) {
		console.log('Error happened', error)
	} else {
		console.log('Server is listening on port ' + port)
	}
	
})