
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  const formBody = new URLSearchParams({
    oid: "00DWd0000076TuX",
    retURL: "https://www.myleadingcampus.com/",
    lead_source: "🌐 Website",
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    description: `${data.subject}\n\n${data.description}`,
  }).toString();

  const response = await fetch(
    "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    }
  );

  if (response.ok) {
    return NextResponse.json({ message: "submitted successfully, we will get back to you soon" });
  } else {
    return NextResponse.json({ message: "❌ Submission failed" }, { status: 500 });
  }
}
