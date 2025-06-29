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
  <div style="font-family: Arial, sans-serif; background-color: #FDFCFB; color: #000000; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;">
    <p style="font-size: 16px; margin-bottom: 20px;">Hello Team,</p>

    <div style="font-size: 14px; line-height: 1.8;">
      <p><strong style="color: #C8102E;">Name:</strong> ${name}</p>
      <p><strong style="color: #C8102E;">Email:</strong> ${email}</p>
      <p><strong style="color: #C8102E;">Phone:</strong> ${phone}</p>
    </div>

    <div style="font-size: 14px; margin-top: 20px;">
      <p><strong style="color: #C8102E;">Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>

    <p style="margin-top: 30px; font-size: 14px;">Kind regards,</p>
    <p style="font-size: 14px; font-weight: bold; color: #C8102E;">MobiZA Rides App</p>
  </div>
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
