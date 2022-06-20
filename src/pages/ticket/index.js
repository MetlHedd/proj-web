import React from "react";
import MainEventBanner from "../../images/main-event.png";

const Ticket = () => {
  return (
    <div className="grow flex flex-col gap-8 justify-center items-center p-8">
      <div className="bg-white w-full p-8">
        <div className="flex flex-row gap-8">
          <div>
            <img
              className="border"
              src="https://chart.googleapis.com/chart?cht=qr&chl=SOON&chs=240x240&choe=UTF-8&chld=L|2"
            />
          </div>
          <div className="grow flex flex-col">
            <div
              className="bg-center bg-local bg-cover flex flex-col justify-center items-center text-4xl h-48"
              style={{ backgroundImage: `url(${MainEventBanner})` }}
            ></div>
            <div className="text-center font-bold text-4xl self-center justify-self-center">Tusca</div>
            <div>
              <div className="font-bold">Quantidade:</div>
              <div>1</div>
            </div>
            <div className="self-end justify-self-end">
              <span className="text-white rounded p-2" style={{ backgroundColor: "#5e17eb" }}>
                Transferir
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
