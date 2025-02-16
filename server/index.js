const express = require('express');

const app = express()

app.get('/',(req,res) => {
    res.send('Hi Sathvik');
})

app.listen(5000, () => {
    console.log('Server is runnning on port',5000);
})