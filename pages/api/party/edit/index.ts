import type { NextApiRequest, NextApiResponse } from "next";
import DbConnect from "../../../../lib/db/connect";
import PartySchema from "../../../../lib/db/models/partySchema";
import cookie from "cookie";
import checkCookie from "../../../../lib/jwt/checkCookie";

interface Body {
  name: string;
  description: string;
  tags: string;
  lineup: string;
  date: Date;
  hours: string;
  address: string;
  price: number;
  ticketsAvalaible: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let error: undefined | any;

  if (req.method === "POST") {
    try {
      const cookies = cookie.parse(req.headers.cookie || "");
      const decodedCookie = checkCookie(cookies.token || "");

      if (decodedCookie.admin) {
        await DbConnect();

        const body: Body = req.body;
        const data = await PartySchema.findOneAndUpdate({
          name: body.name,
        }, body);

        res.status(200).json({
          status: "ok",
          data,
        });

        return;
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
