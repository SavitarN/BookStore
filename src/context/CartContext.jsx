import { useContext, useState, createContext } from "react";

//create a context//
const CartContext = createContext();

//custom hook
export const useCart = () => useContext(CartContext);

//value provided
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const itemsPlaced = cartItems.length;
  console.log('cartItems here',cartItems)

  
  return (
    <CartContext.Provider value={{ setCartItems, cartItems, itemsPlaced}}>
      {children}
    </CartContext.Provider>
  ); 
};
