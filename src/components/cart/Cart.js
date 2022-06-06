import React, { useContext } from "react";
import Modal from "../ui/Modal";
import classes from "./Cart.module.css";
import CartContext from "../context/cartContext";
import CartItem from "./cartItem";

const Cart= (props)=>{
const ctx=useContext(CartContext);
const removeHandeler=(id)=>{
    ctx.removeItem(id);
}
const addHandeler=(item)=>{
    ctx.addItem(item);

}

    const cartItem=<ul className={classes["cart-items"]}>
    {ctx.items.map((item,i)=>{
return (
    <CartItem 
    key={item.id}
        name={item.name}
        id={item.id}
        price={item.price}
        amount={item.amount}
        onRemove={removeHandeler.bind(null,item.id)}
        onAdd={addHandeler.bind(null,item)}
    />
    );
    })}</ul>
const hasItem=ctx.items.length>0;
    
return(
<Modal  onClick={props.onClick}>
{cartItem}
<div className={classes.total}>
    <span>Total Amount</span>
    <span>{ctx.total.toFixed(2)}</span>
</div>
<div className={classes.actions}>
    <button onClick={props.onClick} className={classes["button--alt"]}>Close</button>
 {hasItem && <button className={classes.button}>Order</button>}
</div>
</Modal>
);
}

export default Cart;