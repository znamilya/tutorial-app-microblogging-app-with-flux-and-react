const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const login = require('./modules/login');


express()
    .set('view engine', 'ejs')
    .set('views', __dirname + '/views')
    .use(express.static('./public'))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(cookieParser())
    .use(session({
        secret: 'fjdssjgtyuylhkbvsjgsjgfkgjkgjfd',
        resave: false,
        saveUninitialized: true,
    }))
    .use(login.router)
    .get('/', login.requireLogin, (req, res) => {
        res.render('index');
    })
    .get('*', (req, res) => {
        res.sendStatus(404);
    })
    .listen('7676', function () {
        console.log('Server listening at port 7676');
    });