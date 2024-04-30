// import the server and start it!
const server = require('./api/server')

server.listen(9000, () => {
    console.log("Server started on http://localhost:9000")
})