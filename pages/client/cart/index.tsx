import Button from "../../../components/button";
import CartParty from "../../../components/cartParty";
import createCart from "../../../utils/cart";

export default function Index() {
  const cart = createCart();

  return (
    <div className="flex flex-col gap-8 justify-center items-center p-8">
    <div className="bg-white w-full p-8">
      {
        cart.cart.map((item) => {
          return <CartParty {...item} handleRemove={() => {
            cart.handleRemove(item.name);
          }}
          handleChangeQuantity={(name, quantity) => {
            cart.handleChangeQuantity(name, quantity);
          }}
          />;
        })
      }
    </div>
    <div className="flex justify-end items-end w-full">
      <div className="bg-white p-8 flex flex-col gap-4">
        <div className="font-bold text-4xl">
          Total: R${cart.total}
        </div>
        <div>
          <Button label="Fechar pedido" link="/client/tickets" />
        </div>
      </div>
    </div>
  </div>
  )
}