var express = require('express');

express()
    .set('view engine', 'ejs')
    .set('views', __dirname + '/views')
    .use(express.static('./public'))
    .get('*', function (req, res) {
        res.render('index');
    })
    .listen('7676', function () {
        console.log('Server listening at port 7676');
    });