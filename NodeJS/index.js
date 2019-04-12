const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./db.js');
var userController = require('./controllers/UserController.js');

//init app
const app = express();

//new
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

//set Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){  //cd - callback
    cb(null, file.fieldname + '-' +Date.now() + path.extname(file.originalname));
  }
});

//init upload
const upload = multer({
  storage: storage
}).single('myImage');// single - for upla]oad one image

//EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

//for POST req
app.post('/upload', (req, res) => {
  //res.send('test'); //for check
  upload(req, res, (err) => {
    if(err){
      escape.render('index', {
        msg: err
      });
    } else {
      console.log(req.file);
      res.send('test');
    }
  });
});
//end new<-----


const port = 3000;

//public folder
app.use(express.static('./public'));

//-->old
//app.use(bodyParser.json());
//app.use(cors({origin: 'http://localhost:4200'}));//change port 3000 to 4200
//old<--

app.listen(port, () => console.log(`Server started at port : ${port}`));

//app.use('/users', userController);
