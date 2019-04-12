const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./db.js');
var userController = require('./controllers/UserController.js');

//new
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');


//init app
var app = express();

//--->new

//EJS
app.set('view engine', 'ejs');

//public folder
app.use(express.static('./public'));// public is folder name 

app.get('/', (req, res) => resizeBy.render('index'));
//end new<-----


const port = 3000;

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));//change port 3000 to 4200

app.listen(port, () => console.log(`Server started at port : ${port}`));

app.use('/users', userController);
