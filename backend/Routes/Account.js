const express = require('express');
const router = express.Router();
const account = require('../API/AccountAPI.js');
const Hashing = require('../API/encryt.js');
// const cors = require('cors');

router.post('/', (req, res) => {
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

router.post('/Check', function(req, res){ // The Checking ID
    const command = `SELECT * FROM user WHERE user_id = \'${req.body['id']}\'`;
    account.Check(command)
    .then(resolve => res.send(resolve))
    .catch(rejects => console.log(rejects));
});

router.post('/CheckNick', function(req, res){ // The Checking NickName
    const command = `SELECT * FROM user WHERE user_nickname = \'${req.body['nickname']}\'`;
    account.Check(command)
    .then(resolve => res.send(resolve))
    .catch(rejects => console.log(rejects));
});

module.exports = router;