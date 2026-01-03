import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/recipes')
      .then(res => setRecipes(res.data));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/recipes/${id}`);
    setRecipes(recipes.filter(recipe => recipe._id !== id));
  };

  return (
    <div>
      <h2>Recipes:</h2>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.title}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
