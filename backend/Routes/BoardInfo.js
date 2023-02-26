const express = require("express");
const router = express.Router();
const DB = require('../API/DBmanage.js');

router.get("/postnum/:num", (req, res) => {
    DB.SelectWhere('post', { num : req.params.num })
    .then(result => {
        const response = [result[0].title, result[0].contents, result[0].writer, result[0].time];
        res.send(response);
    })
})

router.get("/index/:id", (req, res) => { // if you want to use parameter in URI use :(any names you want to use)
    console.log(req.params.id)
    DB.SelectLimit('post', req.params.id, ['title', 'num'])
    .then((result) => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
        res.send({ "response" : "error!" });
    })
});

router.post("/Count", (req,res) => {
    DB.Select("post")
    .then((result) => res.send(Object.keys(result).length.toString()))
    .catch(err => console.log(err));
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