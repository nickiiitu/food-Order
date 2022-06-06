// import Card from "../../ui/Card";
import classes from "./mealItem.module.css";
import MealItemForm from "./mealItemForm";
import CartContext from "../../context/cartContext";
import React,{ useContext } from "react";


const MealItem=(props)=>{
    const ctx=useContext(CartContext);
    const addHandeler=(amt)=>{
        ctx.addItem({
            name:props.name,
            id:props.id,
            amount:amt,
            price:props.price
        })
    }
    return(

        <li className={classes.meal}>
        <div >
        <h3 >
            {props.name}
        </h3>
            <div className={classes.description}>
            {props.desc}
            </div>
            <div className={classes.price}>
                {`$${props.price.toFixed(2)}`}
            </div>
            </div>
            <div className={classes.form}>
                <MealItemForm  onAddToCart={addHandeler}/>
            </div>
        </li>
    )
}
export default MealItem;