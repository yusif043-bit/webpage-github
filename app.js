var http = require('http');
var express = require('express');
var ejsLayout = require('express-ejs-layouts');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var indexRouter = require('./app_server/routers/indexRouter');
var loginRouter = require('./app_server/routers/loginRouter');
var signupRouter = require('./app_server/routers/signupRouter');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app_server/views'));
app.use(ejsLayout);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', signupRouter);

app.listen(3000);