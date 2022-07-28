import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food)=> {
    if (filterBy === "All"){
      return true;
    }
    else {return food.cuisine === filterBy}
  })

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood])
  }

  function handleLiClick(food){
    console.log(food)
    let newArray = [...foods]
    let index = food.id -1
    newArray[index].heatLevel+= 1
    setFoods(newArray)

  }

  function handleFilterChange(event){
    let selectOption = event.target.value
    console.log(event.target.value)
    let newArray = foods.filter(food => food.cuisine === selectOption)
    setFoods(newArray)
  }


  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick= {()=> handleLiClick(food)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select onChange= {handleFilterChange} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
