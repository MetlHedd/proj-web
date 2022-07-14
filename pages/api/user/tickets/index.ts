import type { NextApiRequest, NextApiResponse } from "next";
import PartySchema from "../../../../lib/db/models/partySchema";
import TicketSchema from "../../../../lib/db/models/ticketSchema";
import cookie from "cookie";
import checkCookie from "../../../../lib/jwt/checkCookie";
import DbConnect from "../../../../lib/db/connect";
import UserSchema from "../../../../lib/db/models/userSchema";

interface CartItem {
  name: string;
  quantity: number;
}

interface Body {
  items: CartItem[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let error: undefined | any;

  if (req.method === "GET") {
    await DbConnect();

    const cookies = cookie.parse(req.headers.cookie || "");
    const decodedCookie = checkCookie(cookies.token || "");

    if (decodedCookie.email) {
      const userData = await UserSchema.findOne({
        email: decodedCookie.email,
      });
      const tickets = await TicketSchema.find({
        user: userData._id,
      });
      const parties = await PartySchema.find({
        _id: { $in: tickets.map((ticket) => ticket.party) },
      });

      const data = [];

      for (const ticket of tickets) {
        data.push({
          ticket: ticket,
          party: parties.find((party) => party._id.toString() === ticket.party.toString()),
        })
      }

      res.status(200).json({
        status: "ok",
        data,
      });

      return;
    }
  }

  res.status(400).json({
    status: "error",
    error,
  });
}
