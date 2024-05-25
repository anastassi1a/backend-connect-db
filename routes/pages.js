const pagesRouter = require("express").Router();
const {checkCookiesJWT, checkAuth} = require("../middlewares/auth")
const sendDashboard = require("../controllers/auth")

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 