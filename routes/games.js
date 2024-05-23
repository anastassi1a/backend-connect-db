const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares/games');
const sendGameCreated = require('../controllers/games');

const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated,
    checkAuth,
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated,
    checkAuth,
  );

  gamesRouter.delete(
    "/games/:id",
    checkAuth,
    deleteGame,
    sendGameDeleted
  ); 
  
module.exports = gamesRouter;