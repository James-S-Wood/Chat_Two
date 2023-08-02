// Load express module with `require` directive
var express = require('express')
var app = express()

// Serve files from the root directory
app.use(express.static('public'))

// Set up a simple API endpoint
app.get('/api/hello', function (req, res) {
    res.send({message: 'Hello from the API!'})
})

// Declare the listening port
var port = 8080
app.listen(port, function () {
    console.log(`App listening on port ${port}`)
})