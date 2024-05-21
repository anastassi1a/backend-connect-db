  const categoriesRouter = require('express').Router();

  const findAllCategories = require('../middlewares/categories');
  const sendCategoryCreated = require('../controllers/categories');

  categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
  categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    createCategory,
    sendCategoryCreated
  );
  
  categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    updateCategory,
    sendCategoryUpdated
  );

  module.exports = categoriesRouter;
  