import { Router, Response, Request } from "express";
import * as signupService from "../services/signup.service";

const signupApiRouter : Router = Router();

signupApiRouter.post('/', function (req: Request, res: Response) {
  process_signup(req.body);
  res.sendStatus(204);
});

async function process_signup(body) {
  console.log(JSON.stringify(body))
  signupService.newSignup(body);
}

export { signupApiRouter }