import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import "../styles/Card.css";
// MUI
import CircularProgress from "@mui/material/CircularProgress";

const Api = ({ type }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
      .then((res) => {
        setMeals(res.data.meals || []);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [type]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        gap: "20px",
        overflowX: "auto",
        padding: "10px",
        margin: "0 5px",
        scrollSnapType: "x mandatory", // توقف أنيق عند البطاقة
      }}
      className="scroll-container"
    >
      {loading && <CircularProgress />}
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          style={{
            flex: "0 0 auto",
            minWidth: "200px",
            scrollSnapAlign: "start",
          }}
        >
          <Card meal={meal} />
        </div>
      ))}
    </div>
  );
};

export default Api;
