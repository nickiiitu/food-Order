import Nav from "./components/navbar";
import Meals from "./components/Meals/meals";
import './App.css';
import Cart from "./components/cart/Cart";
import React,{ useState } from "react";
import CartProvider from "./components/context/CartProvider";

function App() {
  const [showCart,setShowCart]=useState(false);
  const getShowCart=()=>{
    setShowCart(true);
  }
  const hideShowCart=()=>{
    setShowCart(false);
  }
  return (
    <div className="App">
    <CartProvider>
{    showCart && <Cart onClick={hideShowCart}/>}
     <Nav onClick={getShowCart}/>
     <main >
       <Meals /> 
     </main>
     </CartProvider>
    </div>
  );
}

export default App;
