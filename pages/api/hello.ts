import UserSchema from "../../lib/db/models/userSchema";
import PartySchema from "../../lib/db/models/partySchema";

export default async function handler(req, res) {
  await UserSchema.create({
    name: "ADMIN",
    cpf: "000",
    birthDate: "11/11/2011",
    address: "endereco",
    phone: "4002-8922",
    email: "admin@role.com",
    password: "123",
    admin: true,
  });
  await PartySchema.create({
    name: 'Tusca',
    description: 'O tusca voltou!',
    tags: 'Open Bar,LGBTQIA+',
    lineup: 'Pabllo Vitar,Pedro Sampaio',
    date: '2022-07-06',
    hours: '16:00 - 04:00',
    address: 'Localização',
    price: 15,
    ticketsSold: 2,
    ticketsAvalaible: 1,
    image: 'http://localhost:3000/images/main_event.png',
  });

  res.status(200).json({ name: 'John Doe' });
}
