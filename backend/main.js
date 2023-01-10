const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const account = require('./API/AccountAPI.js');
const multer = require('multer');
const DateNow = require('./API/time.js');
const Hashing = require('./API/encryt.js');
// the modules

const storage = multer.diskStorage({destination: (req,file,cb) => { cb(null, './downloadIMG/') }, filename: (req, file, cb) => { 
    cb(null, file.fieldname + '-' + DateNow.Time)
 }});
const upload = multer({ storage: storage });

const port = 3001; // This is the port number
app.use(cors()); // for interacting frontend using API
app.use(express.json()); // for using POST
app.use(express.urlencoded({ extended : false })); // for using POST
app.use(express.static(path.join(__dirname, '../frontend/build'))); // for using static resources in that path(in directory)

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../frontend/build/index.html')); // for using static resources make from react
});

app.post('/Account', function(req, res){ // The Making Account API
    Hashing.Hash(req.body['password'])
    .then((result) => { // Making command
        const command = `INSERT INTO user VALUES(\'${req.body['id']}\', \'${result.value}\', \'${req.body['nickname']}\', \'${result.key}\');`;
        return command;
    })
    .then((command) => { // Insert Data
        account.Insert(command)
        .then(resolve => res.send(resolve))
        .catch(rejects => res.send(rejects));
    });
});

app.post('/Account/Check', function(req, res){ // The Checking ID API
    const command = `SELECT * FROM user WHERE user_id = \'${req.body['id']}\'`;
    account.Check(command)
    .then(resolve => res.send(resolve))
    .catch(rejects => console.log(rejects));
});

app.post('/IMG', upload.single('ImgFile'), function(req,res){
    console.log(req.file);
    console.log(req.file.filename);
    res.send({'response' : 'Hello'});
});

app.post('/Account/CheckNick', function(req, res){ // The Checking NickName API
    const command = `SELECT * FROM user WHERE user_nickname = \'${req.body['nickname']}\'`;
    account.Check(command)
    .then(resolve => res.send(resolve))
    .catch(rejects => console.log(rejects));
});

app.listen(port, () => {
    console.log(`The server Runing at ${port}`); // Be shown on the CLI when server running 
}); // The server Listens on recieved port

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
