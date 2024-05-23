const usersRouter = require('express').Router();

const findAllUsers = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');
const findUserById = require('../middlewares/users');
const sendUserById = require('../controllers/users')

usersRouter.get("/users/:id", findUserById, sendUserById);
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
  

  const deleteUser = async (req, res, next) => {
    console.log("DELETE /users/:id");
    try {
      req.user = await users.findByIdAndDelete(req.params.id);
      next();
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Ошибка удаления пользователя" }));
    }
  };

module.exports = {usersRouter, deleteUser};