import React from "react";
import MainEventBanner from "../../images/main-event.png";

const Cart = () => {
  return (
    <div className="grow flex flex-col gap-8 justify-center items-center p-8">
      <div className="bg-white w-full p-8">
        <div className="flex flex-col gap-2">
          <div
            className="bg-center bg-local bg-cover flex flex-col justify-center items-center text-4xl h-48"
            style={{ backgroundImage: `url(${MainEventBanner})` }}
          ></div>
          <div className="text-center font-bold text-4xl">Tusca</div>
          <div className="flex flex-row gap-4">
            <div className="font-bold">Quantidade:</div>
            <div>
              <input type="number" id="quantity" name="quantity" min="1" max="5" value="1" className="w-12" />
            </div>
          </div>
          <div className="justify-self-end self-end">
            <span className="text-white rounded p-2 bg-red-400">Remover do carrinho</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end w-full">
        <div className="bg-white p-8 flex flex-col gap-4">
          <div className="font-bold text-4xl">Total: R$300</div>
          <div>
            <span className="text-white rounded p-2" style={{ backgroundColor: "#5e17eb" }}>
              Fechar pedido
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
