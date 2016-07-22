import { Router, Response } from "express";

const healthRouter : Router = Router();

healthRouter.get('/', function (req, res: Response) {
  res.send("ok")
});

export { healthRouter }