import Button from "../components/button";
import Categoria from "../components/categoria";

const mainEventImage = "./images/main_event.png";

const categories = [
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
];

export default function Home() {
  return (
    <>
      <div className="grow">
        <div className="p-8">
          <div
            className="bg-center bg-local bg-cover justify-center items-center flex flex-col h-96"
            style={{ backgroundImage: `url(${mainEventImage})` }}
          >
            <div className="flex-grow" />
            <Button label="Comprar" link="/party/1" />
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
