const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    return res.send({hi: 'Milad'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);