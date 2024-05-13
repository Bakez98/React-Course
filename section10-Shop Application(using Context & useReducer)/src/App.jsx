import { useState } from "react";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "../src/components/Product.jsx";
import Shop from "../src/components/Shop.jsx";

import Header from "./components/Header.jsx";
import CartContextProvider from "./store/shopping-cart-context.jsx";
function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
