const express = require('express');
const pp = express();

app.get('/', (req,res)=> res.send('ok'));

app.listen(3000, () => console.log('Running on 3000'));