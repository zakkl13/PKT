import * as http from 'http'
import * as url from 'url'
import * as path from 'path'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as logger from 'morgan'

var app = express()
app.use(express.static(path.join(__dirname, '../public')))
app.disable("x-powered-by");


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.get('/health', function (req, res) {
  res.send("ok")
});

export var Instance = http.createServer(app)