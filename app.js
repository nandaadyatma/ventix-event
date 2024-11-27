const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const notFoundMiddleware = require('./app/middlewares/not-found')
const handleErrorMiddleware = require('./app/middlewares/handler-error')

const app = express();

const v1 = '/api/v1/'

const eventRouter = require("./app/api/v1/events/router")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(v1, eventRouter)

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware)

module.exports = app;
