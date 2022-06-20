import React from "react";
import MainEventBanner from "../../images/main-event.png";

const Home = () => {
  return (
    <div>
      <div className="grow">
        <div className="p-8">
          <div
            className="bg-center bg-local bg-cover justify-center items-center flex flex-col h-96"
            style={{ backgroundImage: `url(${MainEventBanner})` }}
          >
            <div className="flex-grow"></div>
            <input
              className="text-white justify-center p-2 rounded my-2 cursor-pointer"
              type="button"
              value="Comprar"
              style={{ backgroundColor: "#5E17EB" }}
            />
          </div>
        </div>
      </div>

      <div className="p-4 gap-24 justify-center items-center flex mx-auto">
        <div
          className="flex justify-between text-white text-xl text-center p-8 rounded-full w-40 h-40"
          style={{ backgroundColor: "#5E17EB" }}
        >
          <div className="grow flex justify-center items-center flex-col">
            <div>🔥</div>
            <div>Em Alta</div>
          </div>
        </div>

        <div
          className="flex justify-between text-white text-xl text-center p-8 rounded-full w-40 h-40"
          style={{ backgroundColor: "#5E17EB" }}
        >
          <div className="grow flex justify-center items-center flex-col">
            <div>🏳️‍🌈</div>
            <div>LGBTQIA+</div>
          </div>
        </div>

        <div
          className="flex justify-between text-white text-xl text-center p-8 rounded-full w-40 h-40"
          style={{ backgroundColor: "#5E17EB" }}
        >
          <div className="grow flex justify-center items-center flex-col">
            <div>📉</div>
            <div>Na faixa</div>
          </div>
        </div>

        <div
          className="flex justify-between text-white text-xl text-center p-8 rounded-full w-40 h-40"
          style={{ backgroundColor: "#5E17EB" }}
        >
          <div className="grow flex justify-center items-center flex-col">
            <div>🍻</div>
            <div>Open Bar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
