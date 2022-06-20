import SoldTicket from "../../../components/soldTicket";

const tickets = [
  {
    title: "Tusca",
    totalSoldTickets: 1,
    currentTicket: "2° Lote",
    currentTicketsAvalaible: 1,
    totalSold: 10,
    image: "/images/main_event.png",
  },
];

export default function Tickets() {
  return (
    <div className="grow flex flex-col gap-8 justify-center items-center p-8">
      <div className="bg-white w-full p-8">
        <div className="flex flex-row gap-8">
          {
            tickets.map((ticket, index) => (
              <SoldTicket key={index} {...ticket} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
