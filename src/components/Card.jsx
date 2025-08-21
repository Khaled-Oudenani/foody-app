import "../styles/Card.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoriteMealsContext } from "../contexts/FavoriteMealsContext";
// MUI
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = ({ meal }) => {
  const { favoriteMeals, setFavoriteMeals } = useContext(FavoriteMealsContext);

  const isFavorite = favoriteMeals.some((m) => m.idMeal === meal.idMeal);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setFavoriteMeals(favoriteMeals.filter((m) => m.idMeal !== meal.idMeal));
    } else {
      setFavoriteMeals([...favoriteMeals, meal]);
    }
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <button
          className={isFavorite ? "active" : "favorite-btn"}
          onClick={handleFavoriteClick}
        >
          <FavoriteIcon />
        </button>
      </div>
      <div className="card-content">
        <h3>{meal.strMeal}</h3>
        <Link to={`/RecipeDetails/${meal.idMeal}`} className="details-link">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
