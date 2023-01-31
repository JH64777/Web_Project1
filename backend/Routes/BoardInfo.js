const express = require("express");
const router = express.Router();
const DB = require('../API/AccountAPI.js');

router.post('/', (req, res) => {
    res.send({"response" : "Hello"});
});

router.post('/Posting', (req,res) => {// when data contain " or etc then occur error so we have to encoding it and when data is shown monitor we need to decode that
    const command = `Insert into post(writer,title,time,codenum,contents) VALUES(\"${req.body["name"]}\",\"${req.body["title"]}\",\"${req.body["time"]}\",\"${req.body["num"]}\",\"${req.body["contents"]}\");`;
    DB.Insert(command)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

module.exports = router;