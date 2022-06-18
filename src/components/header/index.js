import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="text-white p-3 flex gap-8 justify-between items-center w-full">
        <div className="px-6 grow flex text-center">
          <div className="grow">
            <Link to="/">Início</Link>
          </div>

          <div className="grow">
            <Link to="/products">Rolês</Link>
          </div>
        </div>

        <div className="outline-4 outline-double p-2" style={{ outlineColor: "#cffbff" }}>
          <Link to="./">
            <div className="font-bold text-6xl text-center" style={{ color: "#5e17eb" }}>
              ROLE
            </div>
            <div
              className="font-serif text-center text-2xl text-white"
              style={{ textShadow: "0px 0px 13px rgba(255, 255, 255, 1)" }}
            >
              .com
            </div>
          </Link>
        </div>

        <div className="px-6 grow flex text-center">
          <div className="grow">
            <Link to="./tickets">Ingressos</Link>
          </div>

          <div className="grow">
            <Link to="/profile">Minha Conta</Link>
          </div>

          <div className="grow">
            <Link to="/cart">Carrinho</Link>
          </div>
        </div>
      </nav>

      <div className="py-3"> </div>
    </div>
  );
};

export default Header;
