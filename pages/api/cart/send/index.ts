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

  if (req.method === "POST") {
    try {
      await DbConnect();

      const cookies = cookie.parse(req.headers.cookie || "");
      const decodedCookie = checkCookie(cookies.token || "");

      if (decodedCookie.email) {
        const userData = await UserSchema.findOne({
          email: decodedCookie.email,
        });
        const body: Body = req.body;
        let canBuy = true;

        for (const item of body.items) {
          const party = await PartySchema.findOne({
            name: item.name,
          });

          if (party.ticketsAvalaible < item.quantity) {
            canBuy = false;
            error = "A quantidade de tickets pedida excede a disponível";

            break;
          }
        }

        if (canBuy) {
          for (const item of body.items) {
            for (let i = 0; i < item.quantity; i++) {
              const party = await PartySchema.findOne({
                name: item.name,
              });

              party.ticketsAvalaible -= item.quantity;
              party.ticketsSold += item.quantity;

              await party.save();

              await TicketSchema.create({
                party: party._id,
                user: userData._id,
              });
            }
          }

          res.status(200).json({
            status: "ok",
          });

          return;
        }
      }
    } catch (e) {
      error = e;
    }
  }

  res.status(400).json({
    status: "error",
    error,
  });
}
