const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const DateNow = require('../API/time.js');

const storage = multer.diskStorage({destination: (req,file,cb) => { cb(null, path.join(__dirname, '../downloadIMG/')) }, filename: (req, file, cb) => { 
    cb(null, file.fieldname + '-' + DateNow.Time)
 }}); // locate directory for downloading imagefile and assigned file name

 const upload = multer({ storage: storage }); // ready to downloading file

router.post('/', upload.single('ImgFile'), function(req,res){ // when receieved image file
    console.log(req.file);
    console.log(req.file.filename);
    res.send({'response' : 'Hello'});
});

module.exports = router;
