import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    "set-cookie",
    `token=null; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=lax; httponly;`
  );
  res.redirect("/")
}