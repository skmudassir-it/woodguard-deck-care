import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("A valid email address is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed.",
        issues: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 422 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Quote request received — we will be in touch within one business day.",
      data: { name: parsed.data.name, email: parsed.data.email, service: parsed.data.service },
    },
    { status: 200 }
  );
}
