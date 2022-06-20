import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/index.js";
import Header from "./components/header/index.js";
import Admin from "./pages/admin";
import Client from "./pages/client";
import Cart from "./pages/client/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import Party from "./pages/party";
import EditParty from "./pages/party/editParty";
import NewParty from "./pages/party/newParty";
import TicketsInfo from "./pages/party/ticketsInfo";
import Products from "./pages/products";
import Profile from "./pages/profile";
import Ticket from "./pages/ticket";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <div className="m-0 flex min-h-screen flex-col" style={{ backgroundColor: "#E61997" }}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="party" element={<Party />} />
            <Route exact path="party/newparty" element={<NewParty />} />
            <Route exact path="party/editparty" element={<EditParty />} />
            <Route exact path="party/ticketsinfo" element={<TicketsInfo />} />
            <Route exact path="tickets" element={<Ticket />} />
            <Route exact path="admin" element={<Admin />} />
            <Route exact path="client" element={<Client />} />
            <Route exact path="cart" element={<Cart />} />
            <Route exact path="products" element={<Products />} />
          </Routes>
          <Footer />
        </div>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
