"use strict";
const express = require("express");
class HelloRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/world', this.index);
    }
    index(req, res, next) {
        res.send("Hello World");
    }
}
exports.HelloRouter = HelloRouter;
