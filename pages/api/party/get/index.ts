import type { NextApiRequest, NextApiResponse } from "next";
import DbConnect from "../../../../lib/db/connect";
import PartySchema from "../../../../lib/db/models/partySchema";
import cookie from "cookie";
import checkCookie from "../../../../lib/jwt/checkCookie";

interface Body {
  name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let error: undefined | any;

  if (req.method === "POST") {
    try {
      const cookies = cookie.parse(req.headers.cookie || "");

      await DbConnect();

      const body: Body = req.body;
      const data = await PartySchema.findOne({
        name: body.name,
      });

      res.status(200).json({
        status: "ok",
        data,
      });

      return;
    } catch (e) {
      error = e;
    }
  }

  res.status(400).json({
    status: "error",
    error,
  });
}
