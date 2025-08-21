import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Liked from "./pages/Liked";
import NavBar from "./components/NavBar";
import "./app.css";
import { SearchContext } from "./contexts/SearchContext";
import { FavoriteMealsContext } from "./contexts/FavoriteMealsContext";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");
  const [favoriteMeals, setFavoriteMeals] = useState(() => {
    const saved = localStorage.getItem("favoriteMeals");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteMeals", JSON.stringify(favoriteMeals));
  }, [favoriteMeals]);

  return (
    <FavoriteMealsContext.Provider value={{ favoriteMeals, setFavoriteMeals }}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
            <Route path="/Liked" element={<Liked />} />
          </Routes>
          <Footer />
        </div>
      </SearchContext.Provider>
    </FavoriteMealsContext.Provider>
  );
};

export default App;
