const recipes = [
  {
    title: "Spaghetti Bolognese",
    ingredients: "Pasta, Tomato Sauce, Ground Beef, Onion, Garlic"
  },
  {
    title: "Chicken Curry",
    ingredients: "Chicken, Curry Powder, Coconut Milk, Onion, Garlic"
  },
  {
    title: "Vegetable Stir Fry",
    ingredients: "Broccoli, Carrots, Bell Peppers, Soy Sauce, Garlic"
  }
];

const recipeList = document.getElementById("recipe-list");
const recipeDetails = document.getElementById("recipe-details");
const recipeTitle = document.getElementById("recipe-title");
const recipeIngredients = document.getElementById("recipe-ingredients");

recipes.forEach((recipe, index) => {
  const card = document.createElement("div");
  card.className = "recipe-card";
  card.innerText = recipe.title;
  card.onclick = () => showDetails(index);
  recipeList.appendChild(card);
});

function showDetails(index) {
  const recipe = recipes[index];
  recipeTitle.innerText = recipe.title;
  recipeIngredients.innerText = `Ingredients: ${recipe.ingredients}`;
  recipeList.style.display = "none";
  recipeDetails.classList.remove("hidden");
}

function goBack() {
  recipeDetails.classList.add("hidden");
  recipeList.style.display = "block";
}
