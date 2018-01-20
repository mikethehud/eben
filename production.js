const express = require("express");
const path = require("path");
const app = express();

const cfg = require("./config");

const ClientStatsPath = path.join(__dirname, "./static/stats.json");
const ServerRendererPath = path.join(__dirname, "./static/server.js");
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

app.use("/static", express.static(path.join(__dirname, "static")))
app.use(ServerRenderer(Stats));

app.listen(cfg.server.PORT);
