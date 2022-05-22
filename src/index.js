const express = require('express');

const serverless = require('serverless-http');

const app = express();

const cron = require("node-cron");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(cors())


module.exports.handler = serverless(app);