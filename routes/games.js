const { sendGameCreated, sendGameUpdated, sendGameDeleted, sendGameById, sendAllGames } = require('../controllers/games');
const { findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, createGame, findGameById, checkIsVoteRequest, updateGame, deleteGame } = require('../middlewares/games');
const checkAuth = require("../middlewares/auth");
const { checkIfUsersAreSafe } = require('../middlewares/users');
const gamesRouter = require('express').Router();

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
  "/games",
  checkEmptyFields,
  checkAuth,
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  sendAllGames,
  updateGame,
  sendGameUpdated,
  checkAuth
);

gamesRouter.delete(
  "/games/:id",
  checkAuth,
  deleteGame,
  sendGameDeleted
);

module.exports = gamesRouter;