import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@mobizarides.com",
      pass: process.env.ZOHO_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Mobiza Enquire now Form" <info@mobizarides.com>`,
    to: "enquiries@mobizarides.com",
    subject: `New App Enquiry from ${name}`,
    html: `
      <p>Hello Team,</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>

      <p>Kind regards,
      MobiZA Rides App</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500,
    });
  }
}
