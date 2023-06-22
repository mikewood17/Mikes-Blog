import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const { firstName, lastName, email, message } = request.body;

  const messageData = {
    from: "Contact Form <mike.wood170697@gmail.com>",
    to: "mike.wood170697@gmail.com",
    subject: "New Contact Form!",
    text: `Hello,

    You have a new form entry from: ${firstName}${lastName} ${email}.

    ${message}
    `,
  };

  return NextResponse.json({ submitted: true });
}
