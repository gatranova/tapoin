import { API_LOGIN } from "@/constants/routes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    return NextResponse.json({ body }, { status: 200 });
  } catch (err: unknown) {
    console.error(`❌ Error POST ${API_LOGIN}: ${err}`);
    return NextResponse.json({ error: err, message: "Terjadi kesalahan saat masuk ke akun Anda." }, { status: 500 });
  }
}