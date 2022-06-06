import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCart={
    items:[],
    total:0
}
const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
        // console.log(action);
        // console.log(state);
        const updatedAmt=state.total + action.items.price;
        // console.log(updatedAmt);
        const itemIndex=state.items.findIndex(item=> item.id===action.items.id);
        const existingCartItem=state.items[itemIndex];
        let ItemWithUpdatedAmt;
        let updatedArray;
        if(existingCartItem){
            ItemWithUpdatedAmt={
                ...existingCartItem,
                // amount:existingCartItem.amount+action.items.amount
                amount:existingCartItem.amount+1
                
            }
            updatedArray=[...state.items];
            updatedArray[itemIndex]=ItemWithUpdatedAmt;
        }else{
            updatedArray=state.items.concat(action.items);}
            return{
                items:updatedArray,
                total:updatedAmt
            }
        }else if(action.type==="REMOVE"){
            const itemIndex=state.items.findIndex(item=> item.id===action.id);
            const existingCartItem=state.items[itemIndex];
            let updatedItemArr;
        if(existingCartItem.amount===1){
                updatedItemArr=state.items.filter(item=>item.id!==action.id);
        }else{
            const updatedItem={...existingCartItem,amount:existingCartItem.amount-1}
            updatedItemArr=[...state.items];
            updatedItemArr[itemIndex]=updatedItem;
        }
        const updatedAmt=state.total-existingCartItem.price;
        return{
            items:updatedItemArr,
            total:updatedAmt
        }
    }
return defaultCart;
}
const CartProvider=(props)=>{
const [cartState,dispatchReducer] =useReducer(cartReducer,defaultCart);
    const addItemHandler=(items)=>{
        // console.log("add  item is called");
        // console.log(items);
        dispatchReducer({type:"ADD",items:items });
    };

    const removeItemHandler=(id)=>{
        dispatchReducer({type:"REMOVE",id:id});
    };
    const cardContext={
        items:cartState.items,
    total:cartState.total,
    addItem:addItemHandler, 
    removeItem:removeItemHandler
    }
    // console.log(cardContext);
    return(
        <CartContext.Provider value={cardContext}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartProvider;