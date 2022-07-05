import mongoose from "mongoose";

const PartySchema = new mongoose.Schema({
  name: { type: String, required: true, index: { unique: true } },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: String, required: true },
  lineup: { type: String, required: true },
  date: { type: String, required: true },
  hours: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  ticketsSold: { type: Number, default: 0 },
  ticketsAvalaible: { type: Number, default: 0 },
});

const Party = mongoose.models.Party || mongoose.model("Party", PartySchema);

export default Party;