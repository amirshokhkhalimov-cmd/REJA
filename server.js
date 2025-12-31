const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb://atlas-sql-695430c827762862cc2d6a49-teyoo8.a.query.mongodb.net/REJA?ssl=true&authSource=admin"

mongodb.connect(connectionString,{useNewUrlParser:true, useUnifiedTopology:true,
},(err, client) => {
    if(err) console.log("ERROR on connection to MongoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");

        const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on PORT: ${PORT}, http://localhost:${PORT} `);  
});
    }
});


