import React from "react";
import MainEventBanner from "../../images/main-event.png";

const Products = () => {
  return (
    <div className="grow">
      <div className="p-8">
        <a href="./festa.html">
          <div
            className="bg-center bg-local bg-cover border-dashed border-2 flex flex-col justify-center items-center text-4xl h-96 event-effect"
            style={{ backgroundImage: `url(${MainEventBanner})` }}
          >
            Mostrar mais informações
          </div>
        </a>
      </div>

      <div className="p-8">
        <a href="./festa.html">
          <div
            className="bg-center bg-local bg-cover border-dashed border-2 flex flex-col justify-center items-center text-4xl h-96 event-effect"
            style={{ backgroundImage: `url(${MainEventBanner})` }}
          >
            Mostrar mais informações
          </div>
        </a>
      </div>
    </div>
  );
};

export default Products;
