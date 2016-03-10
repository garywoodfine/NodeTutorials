var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Geek.I.Am  Website' ,
    content: 'This is some content coming from the controller',
        footer: '&copy; Geek.I.Am  2016'
    });
});

module.exports = router;