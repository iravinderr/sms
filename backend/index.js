const express = require('express');
const dbConnect = require('./config/database');
const annRoutes = require('./routes/annRoutes');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.use('/announcements', annRoutes);


app.listen(PORT, () => {
    console.log(`Server is running successfully at the port no. ${PORT}`);
});

dbConnect();

app.get('/', (req, res) => {
    res.send(`Server is running...`);
});