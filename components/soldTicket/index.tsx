import Button from "../button";

interface Props {
  title: string;
  totalSoldTickets: number;
  currentTicket: string;
  currentTicketsAvalaible: number;
  totalSold: number;
  image: string;
}

export default function SoldTicket({
  title,
  totalSoldTickets,
  currentTicket,
  currentTicketsAvalaible,
  totalSold,
  image,
}: Props) {
  return (
    <div className="grow flex flex-col">
      <div
        className="bg-center bg-local bg-cover flex flex-col justify-center items-center text-4xl h-48"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="text-center font-bold text-4xl self-center justify-self-center">
        {title}
      </div>
      <div className="flex flex-row gap-4">
        <div className="text-xl">
          <div className="font-bold">Quantidade de vendas totais:</div>
          <div>{totalSoldTickets}</div>
        </div>
        <div className="text-xl">
          <div className="font-bold">Lote atual:</div>
          <div>{currentTicket}</div>
        </div>
        <div className="text-xl">
          <div className="font-bold">Ingressos disponíveis no lote atual:</div>
          <div>{currentTicketsAvalaible}</div>
        </div>
        <div className="text-xl">
          <div className="font-bold">Total:</div>
          <div>R$ {totalSold}</div>
        </div>
      </div>
      <div className="self-end justify-self-end">
        <Button label="Editar" />
      </div>
    </div>
  );
}
