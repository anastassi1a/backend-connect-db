const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares/games');
const sendGameCreated = require('../controllers/games');

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
  );
  
  gamesRouter.delete(
    "/games/:id",
    deleteGame,
    sendGameDeleted
  ); 
  
module.exports = gamesRouter;