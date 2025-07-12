import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { reference } = await req.json();

  const secretKey = process.env.PAYSTACK_SECRET_KEY!;
  const res = await fetch(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  const result = await res.json();

  if (result.data.status === "success") {
    // ✅ Save to DB, send confirmation, etc.
    return NextResponse.json({ status: "success", data: result.data });
  }

  return NextResponse.json({ status: "failed", data: result.data });
}
