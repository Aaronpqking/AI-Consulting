import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const errors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0]?.toString();
        if (key && !errors[key]) {
          errors[key] = issue.message;
        }
      }
      return NextResponse.json({ errors }, { status: 400 });
    }

    // In production, persist to Supabase or send email notification.
    // For now, we accept the submission and return success.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
