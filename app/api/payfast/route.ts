import { NextResponse } from "next/server";
import qs from "querystring";

export async function POST(req: Request) {
  console.log("PAYFAST API POST called");

  const { amount, name, email } = await req.json();
  console.log("Request body:", { amount, name, email });

  // Prepare data for PayFast
  const merchant_id = process.env.PAYFAST_MERCHANT_ID!;
  const merchant_key = process.env.PAYFAST_MERCHANT_KEY!;
  const return_url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const cancel_url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const notify_url = `${process.env.NEXT_PUBLIC_SITE_URL}`;

  const data = {
    merchant_id,
    merchant_key,
    return_url,
    cancel_url,
    notify_url,
    amount,
    item_name: "Mobiza Bike Rental",
    name_first: name,
    email_address: email,
  };

  console.log("Prepared PayFast data:", JSON.stringify(data, null, 2));

  const form = qs.stringify(data);

  return NextResponse.json({ form });
}
