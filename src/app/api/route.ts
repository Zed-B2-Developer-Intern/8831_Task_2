import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const { name, email, rating, comment, eventId } = req.body;

      if (!name || !email || !rating || !comment || !eventId) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const feedback = await prisma.feedback.create({
        data: { name, email, rating, comment, eventId },
      });

      return res.status(200).json(feedback);
    }

    if (req.method === "GET") {
      const feedbacks = await prisma.feedback.findMany({
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json(feedbacks);
    }

    return res.status(405).json({ message: "Method not allowed" });

  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
