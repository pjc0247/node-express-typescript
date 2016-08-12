"use strict";
const express = require("express");
const path = require("path");
const hello_1 = require("./hello");
class Server {
    constructor() {
        this.app = express();
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use('/hello', new hello_1.HelloRouter().router);
    }
    static bootstrap() {
        return new Server();
    }
}
module.exports = new Server().app;
