const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');
const connectToDatabase = require('./database/connect');
const cors = require("./middlewares/cors");
const apiRouter = require("./routes/api");

const PORT = 3000;

const app = express();
connectToDatabase();
const cookieParser = require("cookie-parser");

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    categoriesRouter,
    gamesRouter,
    usersRouter,
    express.static(path.join(__dirname, "public"))
  );

app.listen(PORT);