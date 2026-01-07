const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Jonny:d69pcDelMzyX8Yx0@cluster0.jj1xk6y.mongodb.net/Reja"

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true,}, (err, client) => {
    if(err) {
        console.log("ERROR on connection MongoDB");
    }else{
        console.log("MngoDB connection succeed")

        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 4011;
        server.listen(PORT, function(){
            console.log(`The server is runing seccuessfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});





