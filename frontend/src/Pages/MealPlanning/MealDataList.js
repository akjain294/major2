import React, { useEffect, useState } from "react";
import MealList from "./MealList";
import { useParams } from "react-router-dom";

function MealDataList() {
  let { routeCalories } = useParams();
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(1000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=dac93ee70a0e470090ac62a1c5ffa8dd&timeFrame=day&targetCalories=${calories}`
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
    if (routeCalories !== undefined) {
      setCalories(routeCalories);
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
