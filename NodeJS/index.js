const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var userController = require('./controllers/UserController.js');
//new
// const path = require('path');
// const crypto = require('crypto');
// const multer = require('multer');
// const GridFsStorage  = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');

//new end

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));//change port 3000 to 4200

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/users', userController);

// new

//init gfs
// let gfs;

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index');
// });