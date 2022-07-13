import type { NextApiRequest, NextApiResponse } from "next";
import DbConnect from "../../../../lib/db/connect";
import UserSchema from "../../../../lib/db/models/userSchema";
import cookie from "cookie";
import checkCookie from "../../../../lib/jwt/checkCookie";

interface Body {
  name: string;
  cpf: string;
  birthDate: Date;
  address: string;
  phone: string;
  email: string;
  password: string;
  admin?: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let error: undefined | any;

  if (req.method === "POST") {
    try {
      const cookies = cookie.parse(req.headers.cookie || "");
      const decodedCookie = checkCookie(cookies.token || "");
      const body: Body = req.body;

      if (decodedCookie.admin) {
        await DbConnect();

        const data = await UserSchema.findOneAndUpdate({
          email: body.email,
        }, body);

        res.status(200).json({
          status: "ok",
          data,
        });

        return;
      } else if (decodedCookie.email && decodedCookie.email === body.email) {
        await DbConnect();

        const data = await UserSchema.findOneAndUpdate({
          email: body.email,
        }, {
          ...body,
          email: decodedCookie.email,
        });

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
