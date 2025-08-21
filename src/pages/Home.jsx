import React from "react";
import SearchBar from "../components/SearchBar";
import Api from "../services/api";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import "../styles/Home.css";
import SearchApi from "../services/SearchApi";

const Types = [
  "Breakfast",
  "Beef",
  "Chicken",
  "Dessert",
  "Pasta",
  "Seafood",
  "Side",
  "Vegetarian",
  "Starter",
  "Vegan",
];

const Home = () => {
  const { search } = useContext(SearchContext);
  return (
    <div id="home" className="home">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchBar />
      </div>
      {search ? (
        <div className="cards-row">
          <SearchApi search={search} />
        </div>
      ) : (
        <div className="food-types">
          {Types.map((type) => (
            <div className="food-section" key={type}>
              <h2>{type}</h2>
              <div className="cards-row">
                <Api type={type} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
