import Button from "../../components/button";

const imageUrl: string = "/images/main_event.png";
const title: string = "Tusca";
const tags: string[] = ["Open Bar", "Funk, pagode", "LGBQIA+", "Oasis Eventos"];
const lineup: string[] = [
  "Pabllo Vittar",
  "Pedro Sampaio",
  "Kevin o Chris",
  "MC LAN",
];
const time: string = "16:00 às 23hrs";
const date: string = "27/08";
const price: string = "59";

export default function Party() {
  return (
    <>
      <div
        className="bg-center bg-cover bg-local justify-center items-center h-96"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div className="px-32 py-4 mx-auto bg-white">
        <div>
          <h2 className="text-center text-4xl font-bold">{title}</h2>
          <div className="flex flex-row">
            <div className="grow my-4" style={{ color: "#e61997" }}>
              <ul>
                {tags.map((tag) => {
                  return <li key={`tag-${tag}`}>{tag}</li>;
                })}
              </ul>
            </div>
            <div className="my-4" style={{ color: "#e61997" }}>
              <ul>
                {lineup.map((artist) => {
                  return <li key={`lineup-${artist}`}>{artist}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="py-4">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="flex flex-row">
            <div className="grow">
              <div>{time}</div>
              <div>{date}</div>
            </div>
            <div>
              <h2 className="font-bold text-4xl">${price}</h2>
              <div>
                <Button label="Comprar" link="/cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
