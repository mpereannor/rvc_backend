const db = require('../models/category-models');

module.exports = {
  getCategories,
  editCategory
};

async function getCategories(req, res) {
  try {
    const categories = await db.findAllCategories();
    if (categories.length) {
      res.status(200).json(categories);
    } else {
      res.status(404).json({ message: 'There are no saved categories' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'There was an error retrieving the saved categories',
      error
    });
  }
}

async function editCategory(req, res) {
  const { id } = req.params;
  try {
    const editCategory = await db.editCategory(id, req.body);
    res.status(200).json(editCategory);
  } catch (error) {
    res.status(500).json({
      message: `update unsuccesful for id` + id,
      error
    });
  }
}
