import { IncomingForm } from "formidable";
import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";
import os from "os";
import { Readable } from "stream";

export const config = {
  api: {
    bodyParser: false,
  },
};

function bufferToStream(buffer: Buffer): Readable {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

function createReqLikeObject(req: Request, buffer: Buffer) {
  const stream = bufferToStream(buffer);
  const headers: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });
  if (!headers["content-length"]) {
    headers["content-length"] = buffer.length.toString();
  }
  return Object.assign(stream, {
    headers,
    method: req.method,
    url: req.url,
  });
}

export async function POST(req: Request) {
  const buffer = Buffer.from(await req.arrayBuffer());

  const uploadDir = path.join(os.tmpdir(), "mobizarides-uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const form = new IncomingForm({
    multiples: true,
    keepExtensions: true,
    uploadDir,
  });

  const formData: Record<string, any> = {};
  const files: any[] = [];

  const reqLike = createReqLikeObject(req, buffer);

  await new Promise<void>((resolve, reject) => {
    form.parse(reqLike as any, (err, fields, fileMap) => {
      if (err) return reject(err);

      Object.assign(formData, fields);
      for (const key in fileMap) {
        const val = fileMap[key];
        if (Array.isArray(val)) {
          files.push(...val);
        } else {
          files.push(val);
        }
      }
      resolve();
    });
  });

  const {
    firstName,
    surname,
    email,
    phoneNumber,
    address,
    city,
    province,
    zipCode,
    package: pkg,
    bikeQuantity,
    servicePlan,
    maintenancePlan,
  } = formData;

  const quantity = pkg === "business" ? Number(bikeQuantity) : 1;
  const base = 700;
  const addon = quantity > 4 ? 75 : 150;
  const service = servicePlan === "true" ? addon : 0;
  const maintenance = maintenancePlan === "true" ? addon : 0;
  const total = (base + service + maintenance) * quantity;

  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #FDFCFB; padding: 24px; border-radius: 8px;">
      <h2 style="color: #C8102E;">New Rental Application</h2>
      <p><strong>Name:</strong> ${firstName} ${surname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Address:</strong> ${address}, ${city}, ${province}, ${zipCode}</p>
      <hr style="margin: 16px 0;" />
      <h3 style="color: #C8102E;">Package Details</h3>
      <p><strong>Package Type:</strong> ${pkg}</p>
      <p><strong>Bikes:</strong> ${quantity}</p>
      <p><strong>Service Plan:</strong> ${
        servicePlan === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Maintenance Plan:</strong> ${
        maintenancePlan === "true" ? "Yes" : "No"
      }</p>
      <p><strong>Total Weekly Cost:</strong> R${total}/week</p>
      <hr style="margin: 16px 0;" />
      <p style="color: #C8102E;"><strong>MobiZA Rides App</strong></p>
    </div>
  `;

  const attachments = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(file.filepath);
      return {
        filename: file.originalFilename || "document",
        content,
      };
    })
  );

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "peace.mulovhedzi@mobizarides.com",
      pass: process.env.ZOHO_APP_PASSWORD!,
    },
  });

  const mailOptions = {
    from: `"MobiZA Rides Application" <peace.mulovhedzi@mobizarides.com>`,
    to: "applications@mobizarides.com",
    subject: `New Application from ${firstName} ${surname}`,
    html,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email Error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
