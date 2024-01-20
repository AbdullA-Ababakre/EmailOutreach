import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey("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");

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const body = _req.body;

  const msg = {
    to: body.split(","),
    from: "abdullaszu@gmail.com",
    subject: "Hello from Next.js!",
    text: "This is a test email sent from a Next.js app.",
    html: "<strong>This is a test email sent from a Next.js app.</strong>",
  };

  await sgMail.send(msg);
  res.status(200).json({ message: "Email sent successfully" });
}
