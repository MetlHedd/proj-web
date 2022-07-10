import axios from "axios";
import { useEffect, useState } from "react";
import Ticket from "../../../components/ticket"

const tickets = [
  {
    qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=SOON&chs=240x240&choe=UTF-8&chld=L|2",
    image: "/images/main_event.png",
    title: "Tusca - 1° Lote",
  },
  {
    qrCode: "https://chart.googleapis.com/chart?cht=qr&chl=SOON&chs=240x240&choe=UTF-8&chld=L|2",
    image: "/images/main_event.png",
    title: "Tusca  - 2° Lote",
  }
]

export default function Tickets() {
  const initialTicketState: any[] = [];
  const [tickets, setTickets] = useState(initialTicketState);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get("/api/user/tickets"); 

        if (response.status === 200) {
          setTickets(response.data.data);
        }
      } catch(e) {

      }
    }

    asyncFunc();
  }, []);

  return (
    <div className="grow flex flex-col gap-8 justify-center items-center p-8">
    <div className="bg-white w-full p-8">
      {
        tickets.map((ticket, index) => (
          <Ticket key={index} qrCode={`https://chart.googleapis.com/chart?cht=qr&chl=${ticket.ticket._id}&chs=240x240&choe=UTF-8&chld=L|2`} image={ticket.party.image} title={ticket.party.name} id={ticket.ticket._id} />
        ))
      }
    </div>
  </div>
  )
}