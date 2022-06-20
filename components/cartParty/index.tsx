import Button from "../button";

interface Props {
  image: string;
  name: string;
}

export default function ({ image, name }: Props) {
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
            max={5}
            defaultValue={1}
            className="w-12"
          />
        </div>
      </div>
      <div className="justify-self-end self-end">
        <Button label="Remover do carrinho" />
      </div>
    </div>
  );
}
