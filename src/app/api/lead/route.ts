import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues.map((i) => i.message).join(", ") },
      { status: 400 },
    );
  }

  const lead = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;

  if (!apiKey || !to) {
    console.log("[lead] received (no email configured):", lead);
    return NextResponse.json({ success: true, data: { delivered: false } });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Autico.ai <leads@autico.ai>",
        to: [to],
        reply_to: lead.email,
        subject: `New lead: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
        text: [
          `Name: ${lead.name}`,
          `Email: ${lead.email}`,
          lead.company ? `Company: ${lead.company}` : null,
          `Source: ${lead.source}`,
          ``,
          lead.message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[lead] resend error", res.status, text);
      return NextResponse.json(
        { success: false, error: "Email delivery failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, data: { delivered: true } });
  } catch (err) {
    console.error("[lead] unexpected", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
