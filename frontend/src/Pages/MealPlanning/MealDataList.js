import React, { useEffect, useState } from "react";
import MealList from "./MealList";
import { useParams } from "react-router-dom";

function MealDataList() {
  let { routeCalorie } = useParams();
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(1000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=9cba1b9be1664dc4ba703a4077b2f849&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  useEffect(() => {
    if (routeCalorie !== undefined) {
      setCalories(routeCalorie);
      getMealData();
    }
  }, []);
  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
          value = {calories}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default MealDataList;
