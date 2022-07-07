import type { NextApiRequest, NextApiResponse } from "next";
import DbConnect from "../../../../lib/db/connect";
import PartySchema from "../../../../lib/db/models/partySchema";

interface Body {
  limit?: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let error: undefined | any;

  if (req.method === "POST") {
    try {
      await DbConnect();

      const body: Body = req.body;
      const data = await PartySchema.find({}, body);

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
