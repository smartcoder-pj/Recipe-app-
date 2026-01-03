import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [form, setForm] = useState({ title: '', ingredients: '', instructions: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/recipes', form);
    window.location.reload(); // For simplicity
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange}></textarea>
      <textarea name="instructions" placeholder="Instructions" onChange={handleChange}></textarea>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
