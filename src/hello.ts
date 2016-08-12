import * as express from "express";

export class HelloRouter {
  public router : express.Router = express.Router();

  constructor() {
    this.router.get('/world', this.index);
  }  

  public index(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.send("Hello World");
  }
}
