import AvailableMeals from "./availableMeals";
import MealsSummary from "./mealsSummary";
import React from "react";
const Meals =(props)=>{
    return(
        <div>
        <MealsSummary />
            <AvailableMeals />
        </div>
    )
}

export default Meals;