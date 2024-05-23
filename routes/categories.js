  const categoriesRouter = require('express').Router();

  const findAllCategories = require('../middlewares/categories');
  const sendCategoryCreated = require('../controllers/categories');

  categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
  categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
  );
  categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
  );
  categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted
  ); 

  module.exports = categoriesRouter;
  