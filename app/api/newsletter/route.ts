import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = newsletterSchema.parse(body);

    // [DECISION REQUIRED AT BUILD TIME] — Using Buttondown for newsletter
    // Configure BUTTONDOWN_API_KEY in environment variables
    const apiKey = process.env.BUTTONDOWN_API_KEY;

    if (!apiKey) {
      console.warn("[Newsletter] BUTTONDOWN_API_KEY not configured — logging subscription");
      console.log("[Newsletter] New subscriber:", data.email);
      return NextResponse.json({ success: true, mock: true });
    }

    const response = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${apiKey}`,
      },
      body: JSON.stringify({ email: data.email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("[Newsletter] Buttondown error:", errorData);
      // If already subscribed, that's fine
      if (response.status === 409) {
        return NextResponse.json({ success: true, alreadySubscribed: true });
      }
      throw new Error("Failed to subscribe");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed" },
        { status: 400 }
      );
    }
    console.error("[Newsletter API]", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
