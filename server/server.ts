import * as url from 'url';
import * as path from 'path';
import * as express from 'express';
import { json, urlencoded } from "body-parser";
import * as favicon from "serve-favicon";

import { healthRouter } from './routes/health';
import { signupApiRouter } from './routes/signup.api';
import { RushEventRouter } from './routes/rush_event.api';
import { LeadershipRouter } from './routes/leadership.api';



var app = express();
app.use(favicon(path.join(__dirname, '../public/static/favicon.png')));

app.disable("x-powered-by");

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/health", healthRouter);
app.use("/api/signup", signupApiRouter);
app.use("/api/rushevents", RushEventRouter);
app.use("/api/leaders", LeadershipRouter);
app.use("/", express.static(path.join(__dirname, '../public')));


export { app }