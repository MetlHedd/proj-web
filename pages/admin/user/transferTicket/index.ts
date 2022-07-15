import type { NextApiRequest, NextApiResponse } from "next";
import PartySchema from "../../../../lib/db/models/partySchema";
import TicketSchema from "../../../../lib/db/models/ticketSchema";
import cookie from "cookie";
import checkCookie from "../../../../lib/jwt/checkCookie";
import DbConnect from "../../../../lib/db/connect";
import UserSchema from "../../../../lib/db/models/userSchema";

interface Body {
  id: string;
  newEmail: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let error: undefined | any;

  if (req.method === "POST") {
    await DbConnect();

    const cookies = cookie.parse(req.headers.cookie || "");
    const decodedCookie = checkCookie(cookies.token || "");

    if (decodedCookie.email) {
      const body: Body = req.body;

      const userData = await UserSchema.findOne({
        email: decodedCookie.email,
      });
      const tickets = await TicketSchema.findOne({
        user: userData._id,
        _id: body.id,
      });

      if (tickets) {
        const newUserData = await UserSchema.findOneAndUpdate({
          email: body.newEmail,
        }, {
          email: body.newEmail,
        });

        if (newUserData) {

          res.status(200).json({
            status: "ok",
            newUserData,
          });

          return;
        } else {
          error = "Email não encontrado";
        }
      } else {
        error = "Ticket não econtrado";
      }
    }
  }

  res.status(400).json({
    status: "error",
    body: req.body,
    error,
  });
}
