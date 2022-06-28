import type { NextApiRequest, NextApiResponse } from "next";
import DbConnect from "../../../../lib/db/connect";
import UserSchema from "../../../../lib/db/models/userSchema";
import generateCookie from "../../../../lib/jwt/generateCookie";
import cookie from "cookie";
import checkCookie from "../../../../lib/jwt/checkCookie";

interface Body {
  email: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let error: undefined | any;

  try {
    if (req.method === "POST") {
      await DbConnect();

      const body: Body = req.body;
      const data = await UserSchema.findOne({
        email: body.email,
        password: body.password,
      });
      const token = generateCookie(data.email, data.admin);

      res.setHeader(
        "set-cookie",
        `token=${token}; path=/; samesite=lax; httponly;`
      );

      res.status(200).json({
        status: "ok",
        token,
      });

      return;
    } else if (req.method === "GET") {
      const cookies = cookie.parse(req.headers.cookie || "");
      const decodedCookie = checkCookie(cookies.token || "");

      res.status(200).json({
        status: "ok",
        data: decodedCookie,
      });
    }
  } catch (e) {
    console.log(e);
    error = e;
  }

  res.status(400).json({
    status: "error",
    error,
  });
}
