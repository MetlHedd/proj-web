import type { NextApiRequest, NextApiResponse } from "next";
import DbConnect from "../../../../lib/db/connect";
import UserSchema from "../../../../lib/db/models/userSchema";
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

        const data = await UserSchema.findOne({
          email: req.query.email,
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