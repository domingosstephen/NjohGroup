import { NextResponse } from "next/server";
import { partnerInquirySchema } from "@/lib/schema";
import { sendEmail } from "@/lib/email";
import { EMAILS } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = partnerInquirySchema.parse(body);

    await sendEmail({
      to: EMAILS.partners,
      subject: `Partner Inquiry: ${data.institution} — ${data.nature}`,
      replyTo: `${data.name} <${EMAILS.partners}>`,
      html: `
        <h2>New Institutional Partnership Inquiry</h2>
        <table style="border-collapse:collapse;">
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name:</td><td>${data.name}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Title:</td><td>${data.title}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Institution:</td><td>${data.institution}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Type:</td><td>${data.institutionType}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Country:</td><td>${data.country}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Sectors:</td><td>${data.sectors.join(", ")}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Nature:</td><td>${data.nature}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Deal Size:</td><td>${data.dealSize}</td></tr>
        </table>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: error },
        { status: 400 }
      );
    }
    console.error("[Partners API]", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
