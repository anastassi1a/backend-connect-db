const usersRouter = require('express').Router();

const {
  findAllUsers,
  createUser,
  updateUser,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmail,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  findUserById
} = require("../middlewares/users");

const {
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
  sendUserById
} = require("../controllers/users");
const { checkAuth } = require('../middlewares/auth');


usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);

usersRouter.delete(
  "/users/:id",
  checkAuth,
  deleteUser,
  sendUserDeleted
);

usersRouter.get('/me', checkAuth, sendMe);

module.exports = usersRouter;