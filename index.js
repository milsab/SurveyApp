const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    return res.send({hi: 'Milad, The Great!! is the King of the Kings!!!'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);