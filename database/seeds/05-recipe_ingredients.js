exports.seed = function (knex) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 2, unit_id: 1 },
    { recipe_id: 1, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 1, ingredient_id: 3, quantity: 100, unit_id: 3 },
    { recipe_id: 1, ingredient_id: 4, quantity: 5, unit_id: 8 },
    { recipe_id: 1, ingredient_id: 5, quantity: 200, unit_id: 4 },
    { recipe_id: 1, ingredient_id: 6, quantity: 50, unit_id: 3 },
    { recipe_id: 2, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 2, ingredient_id: 7, quantity: 2, unit_id: 6 },
    { recipe_id: 2, ingredient_id: 3, quantity: 200, unit_id: 3 },
    { recipe_id: 2, ingredient_id: 4, quantity: 1, unit_id: 8 },
    { recipe_id: 2, ingredient_id: 6, quantity: 1, unit_id: 6 },
    { recipe_id: 3, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 3, ingredient_id: 3, quantity: 100, unit_id: 3 },
    { recipe_id: 3, ingredient_id: 7, quantity: 3, unit_id: 6 },
    { recipe_id: 3, ingredient_id: 4, quantity: 1, unit_id: 8 },
    { recipe_id: 3, ingredient_id: 10, quantity: 2, unit_id: 1 },
    { recipe_id: 3, ingredient_id: 1, quantity: 2, unit_id: 1 },
    { recipe_id: 3, ingredient_id: 5, quantity: 100, unit_id: 4 },
    { recipe_id: 3, ingredient_id: 16, quantity: 2, unit_id: 7 },
    { recipe_id: 4, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 4, ingredient_id: 1, quantity: 2, unit_id: 1 },
    { recipe_id: 4, ingredient_id: 5, quantity: 150, unit_id: 4 },
    { recipe_id: 4, ingredient_id: 11, quantity: 200, unit_id: 4 },
    { recipe_id: 4, ingredient_id: 4, quantity: 20, unit_id: 3 },
    { recipe_id: 4, ingredient_id: 6, quantity: 150, unit_id: 3 },
    { recipe_id: 5, ingredient_id: 12, quantity: 500, unit_id: 3 },
    { recipe_id: 5, ingredient_id: 7, quantity: 1, unit_id: 6 },
    { recipe_id: 5, ingredient_id: 4, quantity: 1, unit_id: 8 },
    { recipe_id: 5, ingredient_id: 1, quantity: 1, unit_id: 1 },
    { recipe_id: 5, ingredient_id: 5, quantity: 300, unit_id: 4 },
    { recipe_id: 5, ingredient_id: 6, quantity: 1, unit_id: 9 },
    { recipe_id: 5, ingredient_id: 13, quantity: 150, unit_id: 3 },
    { recipe_id: 5, ingredient_id: 14, quantity: 1, unit_id: 7 },
    { recipe_id: 6, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 6, ingredient_id: 7, quantity: 1, unit_id: 6 },
    { recipe_id: 6, ingredient_id: 9, quantity: 100, unit_id: 4 },
    { recipe_id: 6, ingredient_id: 3, quantity: 200, unit_id: 3 },
    { recipe_id: 6, ingredient_id: 4, quantity: 1, unit_id: 8 },
    { recipe_id: 6, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 6, ingredient_id: 6, quantity: 1, unit_id: 9 },
    { recipe_id: 6, ingredient_id: 14, quantity: 1, unit_id: 6 },
    { recipe_id: 7, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 7, ingredient_id: 1, quantity: 2, unit_id: 1 },
    { recipe_id: 7, ingredient_id: 5, quantity: 200, unit_id: 4 },
    { recipe_id: 7, ingredient_id: 11, quantity: 100, unit_id: 4 },
    { recipe_id: 7, ingredient_id: 4, quantity: 2, unit_id: 8 },
    { recipe_id: 7, ingredient_id: 6, quantity: 2, unit_id: 9 },
    { recipe_id: 8, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 8, ingredient_id: 3, quantity: 200, unit_id: 3 },
    { recipe_id: 8, ingredient_id: 7, quantity: 2, unit_id: 6 },
    { recipe_id: 8, ingredient_id: 4, quantity: 2, unit_id: 8 },
    { recipe_id: 8, ingredient_id: 10, quantity: 2, unit_id: 1 },
    { recipe_id: 8, ingredient_id: 15, quantity: 3, unit_id: 6 },
    { recipe_id: 8, ingredient_id: 1, quantity: 2, unit_id: 1 },
    { recipe_id: 8, ingredient_id: 5, quantity: 150, unit_id: 4 },
    { recipe_id: 8, ingredient_id: 16, quantity: 1, unit_id: 7 },
    { recipe_id: 8, ingredient_id: 6, quantity: 1, unit_id: 9 },
    { recipe_id: 8, ingredient_id: 8, quantity: 1, unit_id: 6 },
    { recipe_id: 9, ingredient_id: 1, quantity: 2, unit_id: 1 },
    { recipe_id: 9, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 9, ingredient_id: 4, quantity: 2, unit_id: 8 },
    { recipe_id: 9, ingredient_id: 5, quantity: 200, unit_id: 4 },
    { recipe_id: 9, ingredient_id: 6, quantity: 2, unit_id: 9 },
    { recipe_id: 10, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 10, ingredient_id: 4, quantity: 2, unit_id: 8 },
    { recipe_id: 10, ingredient_id: 35, quantity: 2, unit_id: 6 },
    { recipe_id: 10, ingredient_id: 11, quantity: 300, unit_id: 4 },
    { recipe_id: 11, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 11, ingredient_id: 4, quantity: 2, unit_id: 8 },
    { recipe_id: 11, ingredient_id: 8, quantity: 5, unit_id: 6 },
    { recipe_id: 11, ingredient_id: 11, quantity: 150, unit_id: 4 },
    { recipe_id: 12, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 12, ingredient_id: 4, quantity: 2, unit_id: 8 },
    { recipe_id: 12, ingredient_id: 2, quantity: 500, unit_id: 3 },
    { recipe_id: 12, ingredient_id: 11, quantity: 150, unit_id: 4 },
    { recipe_id: 13, ingredient_id: 17, quantity: 3, unit_id: 1 },
    { recipe_id: 13, ingredient_id: 18, quantity: 3, unit_id: 1 },
    { recipe_id: 13, ingredient_id: 19, quantity: 3, unit_id: 10 },
    { recipe_id: 13, ingredient_id: 20, quantity: 1, unit_id: 11 },
    { recipe_id: 13, ingredient_id: 21, quantity: 2, unit_id: 8 },
    { recipe_id: 13, ingredient_id: 22, quantity: 1, unit_id: 1 },
    { recipe_id: 13, ingredient_id: 8, quantity: 3, unit_id: 6 },
    { recipe_id: 13, ingredient_id: 23, quantity: 2, unit_id: 1 },
    { recipe_id: 13, ingredient_id: 24, quantity: 2, unit_id: 6 },
    { recipe_id: 13, ingredient_id: 25, quantity: 1, unit_id: 6 },
    { recipe_id: 13, ingredient_id: 26, quantity: 1, unit_id: 6 },
    { recipe_id: 13, ingredient_id: 27, quantity: 2, unit_id: 8 },
    { recipe_id: 13, ingredient_id: 33, quantity: 12, unit_id: 1 },
    { recipe_id: 14, ingredient_id: 17, quantity: 2, unit_id: 1 },
    { recipe_id: 14, ingredient_id: 19, quantity: 3, unit_id: 10 },
    { recipe_id: 14, ingredient_id: 17, quantity: 2, unit_id: 1 },
    { recipe_id: 14, ingredient_id: 23, quantity: 2, unit_id: 1 },
    { recipe_id: 14, ingredient_id: 24, quantity: 2, unit_id: 6 },
    { recipe_id: 14, ingredient_id: 25, quantity: 1, unit_id: 6 },
    { recipe_id: 14, ingredient_id: 26, quantity: 1, unit_id: 6 },
    { recipe_id: 14, ingredient_id: 3, quantity: 2, unit_id: 7 },
    { recipe_id: 14, ingredient_id: 30, quantity: 2, unit_id: 7 },
    { recipe_id: 14, ingredient_id: 36, quantity: 200, unit_id: 3 },
    { recipe_id: 14, ingredient_id: 29, quantity: 400, unit_id: 3 },
    { recipe_id: 14, ingredient_id: 33, quantity: 12, unit_id: 1 },
    { recipe_id: 15, ingredient_id: 17, quantity: 2, unit_id: 1 },
    { recipe_id: 15, ingredient_id: 36, quantity: 6, unit_id: 6 },
    { recipe_id: 15, ingredient_id: 19, quantity: 3, unit_id: 10 },
    { recipe_id: 15, ingredient_id: 24, quantity: 2, unit_id: 6 },
    { recipe_id: 15, ingredient_id: 25, quantity: 1, unit_id: 6 },
    { recipe_id: 15, ingredient_id: 26, quantity: 1, unit_id: 6 },
    { recipe_id: 15, ingredient_id: 27, quantity: 2, unit_id: 8 },
    { recipe_id: 15, ingredient_id: 23, quantity: 2, unit_id: 1 },
    { recipe_id: 15, ingredient_id: 37, quantity: 250, unit_id: 3 },
    { recipe_id: 15, ingredient_id: 33, quantity: 12, unit_id: 1 },
    { recipe_id: 15, ingredient_id: 38, quantity: 3, unit_id: 11 },
    { recipe_id: 16, ingredient_id: 34, quantity: 2, unit_id: 1 },
    { recipe_id: 16, ingredient_id: 30, quantity: 2, unit_id: 8 },
    { recipe_id: 16, ingredient_id: 3, quantity: 3, unit_id: 7 },
    { recipe_id: 16, ingredient_id: 4, quantity: 3, unit_id: 8 },
    { recipe_id: 16, ingredient_id: 2, quantity: 400, unit_id: 3 },
    { recipe_id: 16, ingredient_id: 8, quantity: 3, unit_id: 7 },
    { recipe_id: 16, ingredient_id: 11, quantity: 125, unit_id: 4 },
  ]);
};
