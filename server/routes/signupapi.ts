import { Router, Response, Request } from "express";

const signupApiRouter : Router = Router();

signupApiRouter.post('/', function (req: Request, res: Response) {
  process_signup(req.body);
  res.sendStatus(204);
});

async function process_signup(body: string) {
  console.log(body);
}

export { signupApiRouter }