import type { NextApiRequest, NextApiResponse } from "next";
import DbConnect from "../../../../lib/db/connect";
import PartySchema from "../../../../lib/db/models/partySchema";
import cookie from "cookie";
import checkCookie from "../../../../lib/jwt/checkCookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let error: undefined | any;

  if (req.method == "GET") {
    try {
      const cookies = cookie.parse(req.headers.cookie || "");
      const decodedCookie = checkCookie(cookies.token || "");

      if (decodedCookie.admin) {
        await DbConnect();

        const data = await PartySchema.findOne({
          name: req.query.name,
        });

        await data.remove().exec();

        res.redirect("/parties");

        return;
      }
    } catch (e) {
      error = e;
    }
  }

  res.redirect("/parties");
}