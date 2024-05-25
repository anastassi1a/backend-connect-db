const usersRouter = require('express').Router();

const {
  findAllUsers,
  createUser,
  updateUser,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmail,
  checkEmptyNameAndEmailAndPassword,
  hashPassword
} = require("../middlewares/users");

const {
  sendAllUsers,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
  sendMe
} = require("../controllers/users");

const checkAuth = require("../middlewares/auth")

usersRouter.get("/me", checkAuth, sendMe);
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

module.exports = usersRouter;