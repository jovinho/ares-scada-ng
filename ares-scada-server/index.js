#!/usr/bin/env node

/**
 * Module dependencies.
 */

const ioService = require("./socket.io/io-service");
const app = require("./app");
const debug = require("debug")("hades-server:server");
const http = require("http");

const appCommons = require("./commons/run-app");
const socketService = require("./socket.io/socket-service");

/**
 * Get port from environment and store in Express.
 */

const port = appCommons.normalizePort(process.env.PORT || "3000");
const server = app.listen(port);
const io = require("socket.io")(server);

ioService.setIo(io);

socketService.init(io);

/**
 * Create HTTP server.
 */

server.on("error", appCommons.onError);
server.on("listening", appCommons.onListening(server));
