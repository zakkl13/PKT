import { Router, Response } from "express";
import * as RushEventService from '../services/rush_event.service';

const RushEventRouter : Router = Router();

RushEventRouter.get('/', function (req, res: Response) {
  RushEventService.getEvents().then(function(result) {
    res.send(result);
  }).catch(function(err) {
    console.log(err)
    res.status(500).send("Unable to retrieve events at this time")
  })
});

export { RushEventRouter }