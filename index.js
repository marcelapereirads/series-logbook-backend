const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', function(req, res){
   res.send("Server is up.");
});

app.listen(3000);