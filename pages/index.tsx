import { useState } from "react";
import Button from "../components/button";
import Categoria from "../components/categorie";

export default function Home() {
  const [mainEventImage, setMainEventImage] = useState("./images/main_event.png");
  const [categories, setCategories] = useState([
    {
      title: "🔥",
      description: "Em Alta",
    },
    {
      title: "🏳️‍🌈",
      description: "LGBTQIA+",
    },
    {
      title: "📉",
      description: "Na faixa",
    },
    {
      title: "🍻",
      description: "Open Bar",
    },
  ]);

  return (
    <>
      <div className="grow">
        <div className="p-8">
          <div
            className="bg-center bg-local bg-cover justify-center items-center flex flex-col h-96"
            style={{ backgroundImage: `url(${mainEventImage})` }}
          >
            <div className="flex-grow" />
            <Button label="Comprar" link="/party/Tusca" />
          </div>
        </div>
      </div>
      <div className="p-4 gap-24 justify-center items-center flex mx-auto">
        {categories.map((item) => {
          return <Categoria {...item} />;
        })}
      </div>
    </>
  );
}
