const express = require("express");
const router = express.Router();
const DB = require('../API/DBmanage.js');

router.post('/', (req, res) => {
    res.send({"response" : "Hello"});
});
// `Insert into post(writer,title,time,codenum,contents) VALUES(\"${req.body["name"]}\",\"${req.body["title"]}\",\"${req.body["time"]}\",\"${req.body["num"]}\",\"${req.body["contents"]}\");`;
router.post('/Posting', (req,res) => {// when data contain " or etc then occur error so we have to encoding it and when data is shown monitor we need to decode that
    DB.Insert('post',req.body)
    .then(result => res.send({ "response" : "Well Done!" }))
    .catch(err => {
        console.log(err);
        res.send({ "response" : "Check Length of your contents!" });
        });
    });
module.exports = router;