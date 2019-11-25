const express = require('express');
const pp = express();

app.get('/', (req,res)=> res.send('oks'));

app.listen(3000, () => console.log('Running on 3000'));