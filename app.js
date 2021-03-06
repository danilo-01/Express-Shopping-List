const express = require('express');
const itemsRoutes = require('./routes/itemsRoutes');

const app = express();

app.use(express.json());
app.use('/items', itemsRoutes);

module.exports = app
