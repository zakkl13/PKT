import { Router, Response } from "express";
import * as RushEventService from '../services/rush_event.service';

const RushEventRouter : Router = Router();

RushEventRouter.get('/', function (req, res: Response) {
  RushEventService.getEvents().then(function(result) {
    res.send(result);
    
  })
});

export { RushEventRouter }