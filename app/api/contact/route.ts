import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

// EDIT ME: this stub validates the submission and logs it to the server
// console — it does not send an email yet. To actually deliver messages,
// wire in an email service here (e.g. Resend, Nodemailer, Postmark) using
// the validated `payload` below.
export async function POST(request: NextRequest) {
  const payload = (await request.json()) as Partial<ContactPayload>;

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  console.log("New contact form submission:", payload);

  return NextResponse.json({ ok: true });
}
