/// <reference path="../typings/index.d.ts" />
import * as url from 'url';
import * as path from 'path';
import * as express from 'express';
import { json, urlencoded } from "body-parser";
import * as favicon from "serve-favicon";


import { healthRouter } from './routes/health';
var app = express();
app.use(favicon(path.join(__dirname, '../public/static/favicon.png')));

app.disable("x-powered-by");

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/health", healthRouter);
app.use(express.static(path.join(__dirname, '../public')));


export { app }