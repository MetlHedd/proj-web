import type { NextApiRequest, NextApiResponse } from "next";
import UserSchema from "../../../../lib/db/models/userSchema";
import DbConnect from "../../../../lib/db/connect";
import generateCookie from "../../../../lib/jwt/generateCookie";

interface Body {
  name: string;
  cpf: string;
  birthDate: Date;
  address: string;
  phone: string;
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
      const data = await UserSchema.create(body);

      res.status(200).json({
        status: "ok",
        data: data,
      });

      return;
    }
  } catch (e) {
    error = e;
  }

  res.status(400).json({
    status: "error",
    error,
  });
}
