import React from "react";
import MainEventBanner from "../../images/main-event.png";

const Party = () => {
  return (
    <div className="grow">
      <div
        className="bg-center bg-cover bg-local justify-center items-center h-96"
        style={{ backgroundImage: `url(${MainEventBanner})` }}
      ></div>

      <div className="px-32 py-4 mx-auto bg-white">
        <div>
          <h2 className="text-center text-4xl font-bold">Tusca</h2>

          <div className="flex flex-row">
            <div className="grow my-4" style={{ color: "#e61997" }}>
              <ul>
                <li>Open Bar</li>
                <li>Funk, pagode</li>
                <li>LGBQIA+</li>
                <li>Oasis Eventos</li>
              </ul>
            </div>

            <div className="my-4" style={{ color: "#e61997" }}>
              <ul>
                <li>Pabllo Vittar</li>
                <li>Pedro Sampaio</li>
                <li>Kevin o Chris</li>
                <li>MC LAN</li>
              </ul>
            </div>
          </div>

          <div className="py-4">
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <div className="flex flex-row">
            <div className="grow">
              <div>16:00 às 23hrs</div>

              <div>27/08</div>
            </div>

            <div>
              <h2 className="font-bold text-4xl">$59</h2>

              <div>
                <input
                  className="text-white justify-center p-2 rounded my-2 cursor-pointer"
                  type="button"
                  value="Comprar"
                  style={{ backgroundColor: "#5e17eb" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Party;
