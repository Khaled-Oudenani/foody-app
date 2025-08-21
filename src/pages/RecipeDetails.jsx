import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setMeal(data.meals[0]);
    };

    fetchMeal();
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  // استخراج المكونات والمقادير
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{meal.strMeal}</h1>
      <img
        className="recipe-image"
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />

      <div className="recipe-meta">
        <span>
          <b>Category:</b> {meal.strCategory}
        </span>
        <span>
          <b>Area:</b> {meal.strArea}
        </span>
      </div>

      <h2>Ingredients</h2>
      <table className="ingredients-table">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((item, index) => (
            <tr key={index}>
              <td>{item.ingredient}</td>
              <td>{item.measure}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Instructions</h2>
      <p className="instructions">{meal.strInstructions}</p>

      {meal.strYoutube && (
        <div className="video-container">
          <h2>Video Recipe</h2>
          <iframe
            src={`https://www.youtube.com/embed/${
              meal.strYoutube.split("v=")[1]
            }`}
            title="Recipe Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
