import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContex";
const Products = () => {
  const { userLogged, loggedIn } = useContext(AuthContext);

  return (
    <section className="w-full p-30 min-h-screen">
      {loggedIn && <p>hello {userLogged?.username}</p>}
    </section>
  );
};

export default Products;
