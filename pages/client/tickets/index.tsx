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
  return (
    <div className="grow flex flex-col gap-8 justify-center items-center p-8">
    <div className="bg-white w-full p-8">
      {
        tickets.map((ticket, index) => (
          <Ticket key={index} {...ticket} />
        ))
      }
    </div>
  </div>
  )
}