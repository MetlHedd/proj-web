import Button from "../../../components/button";
import CartParty from "../../../components/cartParty";

const items = [
  {
    image: "/images/main_event.png",
    name: "Tusca",
  },
];
const total: number = 300;

export default function Index() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center p-8">
    <div className="bg-white w-full p-8">
      {
        items.map((item) => {
          return <CartParty {...item} />;
        })
      }
    </div>
    <div className="flex justify-end items-end w-full">
      <div className="bg-white p-8 flex flex-col gap-4">
        <div className="font-bold text-4xl">
          Total: R${total}
        </div>
        <div>
          <Button label="Fechar pedido" link="/client/tickets" />
        </div>
      </div>
    </div>
  </div>
  )
}