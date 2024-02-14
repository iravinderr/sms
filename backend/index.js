const express = require('express');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server is running successfully at the port no. ${PORT}`);
});

app.get('/', (req, res) => {
    res.send(`Server is running...`);
});