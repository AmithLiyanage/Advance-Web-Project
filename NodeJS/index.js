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
  filename: function(req, file, cb){  //cb - callback
    cb(null, file.fieldname + '-' +Date.now() + path.extname(file.originalname));
  }
});

//init upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},//image size, 1000000 bytes(1Mb)
  fileFilter: function(req, file, cb) { // for donot allow upload files
    checkFileType(file, cb);
  }
}).single('myImage');// single - for upla]oad one image

// check file type ---> function
function checkFileType(file, cb){
  // Allow extention(=ext)
  const filetypes = /jpeg|jpg|png|gif/;

  // check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  // check mime
  const mimetype = filetypes.test(file.mimetype);// ex --->image/jpeg

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

//EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

//for POST req
app.post('/upload', (req, res) => {
  //res.send('test'); //for check
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      // console.log(req.file);
      // res.send('test');
      if (req.file == undefined) {
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('index', {
          msg: 'File Uploaded',
          file: `upload/${req.file.filename}`
        });
      }
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
