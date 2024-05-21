const usersRouter = require('express').Router();

const findAllUsers = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');

usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    sendUserCreated
  );
  
  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
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

module.exports = usersRouter;