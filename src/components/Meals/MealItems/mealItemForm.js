import Input from "../../ui/Input";
import classes from "./mealItemForm.module.css";
import React,{  useRef ,useState } from "react";

const MealItemForm =(props)=>{
    const [isValid,setIsValid]=useState(true);
    const inputRef=useRef();

    const submitHandeler=(event)=>{
        event.preventDefault();
        const enteredAmount=inputRef.current.value;//returns a string
        const enteredAmountNumber= +enteredAmount;//converted to number
        if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5)
        {
            setIsValid(false);
            return; 
        }
        props.onAddToCart(enteredAmountNumber);
    }

    
    return(
<form className={classes.form} onSubmit={submitHandeler}>
<Input label="Amount"
ref={inputRef}
    input={{
        id:"amount",
        defaultValue:"1",
        min:"1",
        max:"5",
step:"1",
type:"number"
        }
    }
/>
<button >+ Add</button>
{!isValid && <p>Please enter a valid Number (0-5)</p>}
</form>
    );
}
export default  MealItemForm;