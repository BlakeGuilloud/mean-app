const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const userController = require('./controllers/userController');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/superLock');

app.get('/', (req, res) => {
  res.send('Not what you were looking for');
});

app.use('/users', userController);

app.listen(port, () => console.log('listening on port ', port));