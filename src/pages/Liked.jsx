// import React from "react";
// import { FavoriteMealsContext } from "../contexts/FavoriteMealsContext";
// import { useContext } from "react";
// import Card from "../components/Card";

// const Licked = () => {
//   const { favoriteMeals } = useContext(FavoriteMealsContext);
//   return (
//     <div className="favorite-meals" style={{ marginTop: "100px" }}>
//       <h1>Favorite Meals</h1>
//       {favoriteMeals.length === 0 ? (
//         <p>No favorite meals found.</p>
//       ) : (
//         <div className="cards-row">
//           {favoriteMeals.map((meal) => (
//             <Card key={meal.idMeal} meal={meal} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Licked;

//

import React, { useContext } from "react";
import { FavoriteMealsContext } from "../contexts/FavoriteMealsContext";
import Card from "../components/Card";
import "../styles/liked.css";

const Licked = () => {
  const { favoriteMeals } = useContext(FavoriteMealsContext);

  return (
    <div id="Liked" className="favorite-meals">
      <h1 className="title">❤️ Favorite Meals</h1>
      {favoriteMeals.length === 0 ? (
        <p className="empty">No favorite meals found.</p>
      ) : (
        <div className="cards-grid">
          {favoriteMeals.map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Licked;
