import React from "react";
import MainEventBanner from "../../images/main-event.png";

const TicketsInfo = () => {
  return (
    <div className="grow flex flex-col gap-8 justify-center items-center p-8">
      <div className="bg-white w-full p-8">
        <div className="flex flex-row gap-8">
          <div className="grow flex flex-col">
            <div
              className="bg-center bg-local bg-cover flex flex-col justify-center items-center text-4xl h-48"
              style={{ backgroundImage: `url(${MainEventBanner})` }}
            ></div>
            <div className="text-center font-bold text-4xl self-center justify-self-center">Tusca</div>
            <div className="flex flex-row gap-4">
              <div className="text-xl">
                <div className="font-bold">Quantidade de vendas totais:</div>
                <div>1</div>
              </div>
              <div className="text-xl">
                <div className="font-bold">Lote atual:</div>
                <div>2 Lote</div>
              </div>
              <div className="text-xl">
                <div className="font-bold">Ingressos disponíveis no lote atual:</div>
                <div>1</div>
              </div>
              <div className="text-xl">
                <div className="font-bold">Total:</div>
                <div>R$ 10,00</div>
              </div>
            </div>
            <div className="self-end justify-self-end">
              <span className="text-white rounded p-2" style={{ backgroundColor: "#5e17eb" }}>
                Editar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsInfo;
