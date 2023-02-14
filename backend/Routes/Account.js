const express = require('express');
const router = express.Router();
const Hashing = require('../API/encryt.js');
const mailer = require('../API/Mail.js');
const DB = require('../API/DBmanage.js');

router.post('/', (req, res) => {
    Hashing.Hash(req.body['user_password'])
    .then((result) => { // Making command
        req.body['salt_key'] = result.key;
        req.body['user_password'] = result.value;
        console.log(req.body['user_password'],"I want to");
        return req.body;
    })
    .then((value) => {
        console.log(value);
        DB.Insert('user', value)
        .then((result) => res.send({"response" : "error"})) 
        .catch((err) => res.send({"response" : "Well Done!"})); 
    })
});

router.post('/Check', function(req, res){ // The Checking ID
    DB.SelectWhere('user', req.body)
    .then((result) => {
        if(result.length == 0){
            res.send({"response" : true});
        }
        else{
            res.send({"response" : false})
        }
    })
    .catch((err) => res.send({"response" : "error"}));
});

router.post('/CheckNick', function(req, res){ // The Checking NickName
    DB.SelectWhere('user', req.body)
    .then((result) => {
        if(result.length == 0){
            res.send({"response" : true});
        }
        else{
            res.send({"response" : false})
        }
    })
    .catch((err) => res.send({"response" : "error"}));
});

router.post('/SendMail', function(req, res){ // Send Code to Client's Mail
    mailer.MailSender(req.body['Email'])
    .then((resolve) => res.send(resolve));
});

module.exports = router;