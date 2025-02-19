require('dotenv').config();
const express = require('express');

//Local imports
const apiRouter  = require('./routes/api');
const connectDB = require('./configs/db');
const port = process.env.PORT;
const host = process.env.HOST
const app = express();
connectDB();

app.use(express.json());
app.use('/api', apiRouter);

app.use((req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port, () => {
	console.log(`Server started at ${host}:${port}`);
});

exports = module.exports = app;
