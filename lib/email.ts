// Email client setup — uses Resend for transactional email
// Configure RESEND_API_KEY in environment variables before launch

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailOptions) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[Email] RESEND_API_KEY not configured — logging email instead");
    console.log("[Email]", { to, subject, replyTo });
    return { success: true, mock: true };
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Njoh Group <noreply@njohgroup.com>",
    to,
    subject,
    html,
    replyTo,
  });

  if (error) {
    console.error("[Email] Failed to send:", error);
    throw new Error("Failed to send email");
  }

  return { success: true };
}
