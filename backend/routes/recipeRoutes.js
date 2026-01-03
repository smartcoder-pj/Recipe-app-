const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

// Get all recipes
router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

// Add new recipe
router.post('/', async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({ title, ingredients, instructions });
    await newRecipe.save();
    res.status(201).json(newRecipe);
});

// Delete a recipe
router.delete('/:id', async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(204).end();
});

module.exports = router;
