import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

import {HelloRouter} from "./hello";

class Server {
  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();

    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use('/hello', new HelloRouter().router);
  }
}

module.exports = new Server().app;
