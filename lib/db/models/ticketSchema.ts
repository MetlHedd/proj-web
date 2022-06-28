import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const exportModule =
  mongoose.models.TicketSchema || mongoose.model("Ticket", TicketSchema);

export default exportModule;