import React, { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "./navbar.css";
import img from "../images/foodImage.jpg";
import CartContext from "./context/cartContext";
const Nav=(props)=>{
    const context=useContext(CartContext);
    const numberOfItems=context.items.reduce((currentNum,item)=>{
        return currentNum+item.amount;
    },0)
    return(
        <div>
        <div className="NavDiv">
            <div className="AppName">
            
            <h1>JaipuriaMeals </h1>
            <DeleteIcon />
            </div>
            <div className="cart">
            <i className="icon fa-solid fa-cart-shopping"></i>
            <h3 >Your Cart</h3>
            <button onClick={props.onClick} className="navbutton">{numberOfItems}</button>
            </div>
        </div>
        <div className="img">
            <img className="i1" src={img}  alt="pic"></img>
        </div>
        </div>
    );
};

export default Nav;