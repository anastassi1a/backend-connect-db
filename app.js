const connectToDatabase = require('./database/connect');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require("cookie-parser");

const cors = require("./middlewares/cors");

const pagesRouter = require('./routes/pages');
const apiRouter = require("./routes/api");

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter, 
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT);