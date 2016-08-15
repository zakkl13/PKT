import { Router, Response } from "express";
import * as LeadershipService from '../services/leadership.service';
import config = require('../config');

const LeadershipRouter : Router = Router();
//in milliseconds
const CacheTime : number = config.isProd ? 100000 : 100;


var cachedresult = null;
var lastretrievetimestamp = 0;

LeadershipRouter.get('/', function (req, res: Response) {
  let timesincelastretrieve = new Date().getTime() - lastretrievetimestamp;
  if (timesincelastretrieve <= CacheTime) {
    res.send(cachedresult);
  } else {
    LeadershipService.getLeaders().then(function(result) {
      lastretrievetimestamp = new Date().getTime();
      cachedresult = result;
      res.send(result);
    }).catch(function(err) {
      console.log(err)
      res.status(500).send("Unable to retrieve leaders at this time")
  })
  }


});



export { LeadershipRouter }