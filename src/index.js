import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// dev-q0r4qsqzefx4wrrs.us.auth0.com
// ZgaPzzdBK4Iur2c7T8PWx9QJTYOzuZXb
// qC6D1r9bSeIBVIS9nORFdgAXnuy_ANlfJRoqhmNLOiBkqTl7Ao_BwSYOwthS6ocx

root.render(
  <Auth0Provider
  domain="dev-q0r4qsqzefx4wrrs.us.auth0.com"
  clientId="ZgaPzzdBK4Iur2c7T8PWx9QJTYOzuZXb"
  redirect_uri={ window.location.origin}
  cacheLocation="localstorage"
  
  >
  <UserProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>
  </Auth0Provider>
);
