import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Log submission (replace with email service like Resend, SendGrid, or Nodemailer)
    console.log("[AKC Contact Lead]", {
      name,
      phone,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
