import React from 'react';
import Layout from "./redux-cart/components/Layout/Layout";
import Products from "./redux-cart/components/Shop/Products";
import Cart from "./redux-cart/components/Cart/Cart";


const App = () => {


  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
};

export default App;
