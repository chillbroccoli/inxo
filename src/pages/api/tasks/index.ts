import { getAuth } from "@clerk/nextjs/server";
import { NextApiHandler } from "next";
import waait from "waait";

import { getXataClient } from "~/lib/xata";
const xata = getXataClient();

const handler: NextApiHandler = async (req, res) => {
  const { userId } = getAuth(req);
  const body = await req.body;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (req.method === "GET") {
    await waait(9000);
    const records = await xata.db.tasks.getAll({
      filter: {
        userId,
      },
    });

    return res.status(200).json(records);
  }

  if (req.method === "POST") {
    try {
      const record = await xata.db.tasks.create({
        ...body,
        userId,
      });

      return res.status(200).json(record);
    } catch (err) {
      return res.status(500).json({ message: "Couldn't create task, try again later." });
    }
  }
};

export default handler;
