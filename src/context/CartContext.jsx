import { useContext, useState, createContext, useEffect } from "react";

//create a context//
const CartContext = createContext();

//custom hook
export const useCart = () => useContext(CartContext);

//value provided
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 

 
  function handleCart(product) {
    const exists = cartItems.find(item => item.cover_edition_key === product.cover_edition_key);
     if(!exists){
         const newProduct={
          ...product,
          quantity:1
         }
      setCartItems((prevValue) => {
      return prevValue ? [...prevValue, newProduct] : [newProduct];
    });
    
     }
  }


  
function handlePlus(id){

  const updated=cartItems.map(item=>{
    return item.cover_edition_key===id?{...item,quantity:item.quantity+1}:item;
});

  setCartItems(updated);
 
}


 
function handleMinus(id){
   const updated=cartItems.map(item=>{
    return item.cover_edition_key===id?{...item,quantity:item.quantity-1}:item;
});
  setCartItems(updated);

 
}
  
  return (
    <CartContext.Provider value={{cartItems, setCartItems, handleCart,handlePlus,handleMinus}}>
      {children}
    </CartContext.Provider>
  ); 
};
