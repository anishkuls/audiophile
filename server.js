const express = require('express');
const app = express();

// Define a route for the root URL 

app.get('/', (req, res)=>{
	res.send("Hello World");
});

// choose a port to listen on

const port = 3001;

// start the server

app.listen(port,()=>{ console.log("server listening the port"+port)});
