import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("Data", req.body);

  const { firstName, lastName, email, message } = req.body;

  const messageData = {
    from: "Contact Form <mike.wood170697@gmail.com>",
    to: "mike.wood170697@gmail.com",
    subject: "New Contact Form!",
    text: `Hello,

    You have a new form entry from: ${firstName}${lastName} ${email}.

    ${message}
    `,
  };

  res.status(200).json({ submitted: true });
}
