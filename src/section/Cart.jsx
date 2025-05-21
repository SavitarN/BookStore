import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {cartItems}=useCart(); 



  return (
    <section className="w-full p-20 ">
      

     
       <div className="w-full flex flex-col items-center border border-red-400 gap-10">
         <h1>Total Cart Books</h1>
{
  cartItems.map(item=>(
    <div className="flex w-[50%] justify-between items-center">
      <div className="h-20 w-20">
            <img
          src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
          alt="book cover image"
          className="w-full h-full object-contain "
        ></img>
        </div>

        <div>
<p className="font-black truncate w-full p-10 border border-red-400">BookName:{item.title}</p>
        </div>
    
  
    </div>
  ))
}
       </div>
    </section>
  );
};

export default Cart;
