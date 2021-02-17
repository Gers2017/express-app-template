const express = require('express');
const app = express();
const settings = require('./settings');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const indexRouter = require('./routes/indexRouter');

//Settings
app.set('appName', settings.appName);
app.set('views', settings.views);
app.set('view engine', settings.viewEngine);
app.set('port', settings.port);

//Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(settings.static));

//Routers
app.use('/', indexRouter);

app.use(function(req, res, next){
  res.render('error');
});

app.listen(app.get('port'), ()=> {
  console.log(`Server is running on:  http://localhost:${app.get('port')}/`);
});