import { Dispatch, SetStateAction, useState } from "react";
import { CartItem } from "../../utils/cart";
import Button from "../button";

interface Props extends CartItem {
  handleRemove: any;
  handleChangeQuantity: any;
}

export default function ({ image, name, quantity, handleRemove, handleChangeQuantity, price }: Props) {
  const [quantityState, setQuantityState] = useState(quantity);

  const handleQuantityUpdate = (event: { target: { value: string; }; }) => {
    handleChangeQuantity(name, parseInt(event.target.value));
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        className="bg-center bg-local bg-cover flex flex-col justify-center items-center text-4xl h-48"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div className="text-center font-bold text-4xl">
        {name}
      </div>
      <div className="flex flex-row gap-4">
        <div className="font-bold">Quantidade:</div>
        <div>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min={1}
            max={100}
            value={quantity}
            className="w-12"
            onChange={handleQuantityUpdate}
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="font-bold">
            Preço unitário: 
          </div>
          <div>
            ${price}
          </div>
        </div>
      </div>
      <div className="justify-self-end self-end">
        <Button label="Remover do carrinho" color="red" click={handleRemove} />
      </div>
    </div>
  );
}
