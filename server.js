const express = require('express');
const app = express();
const PORT = 8000;

// 1) create rapper data
const rappers = {
  "21 savage": {
    "birthName": "Shéyaa Bin Abraham-Joseph",
    "birthPlace": "Plaistow, London, England",
    "age": 32 
  },
  "chance the rapper": {
    "birthName":"Chancelor Bennett",
    "birthPlace": "Chicago, Illinois",
    "age": 32
  },
  "dylan": {
    "birthName": "dylan",
    "birthPlace": "dylan",
    "age": 29 
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 2) add /rappers route
app.get('/rappers', (req, res) => {
  res.json(rappers);
});

// 3) add /:specificRapper route
app.get('/:rapperName', (req, res) => {
  res.json(rappers[req.params.rapperName] || rappers['dylan']);
});

// 4) use cors middleware
// 5) upload to vercel serverless functions

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

