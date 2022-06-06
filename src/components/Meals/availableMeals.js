import Card from "../ui/Card";
import classes from "./availableMeals.module.css";
import MealItem from "./MealItems/mealItem";
import React from "react";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    }
  ];
const AvailableMeals= (props)=>{
return (
  <div className={classes.meals}>
  <Card>
    <ul>
        {DUMMY_MEALS.map((m)=>{
           return <MealItem 
             name={m.name}
             id={m.id}
             desc={m.description}
             key={m.id}
             price={m.price}
           />
        })}
    </ul>
    </Card>
    </div>
    
)
}
export default AvailableMeals;