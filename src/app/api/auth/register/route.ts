import { API_REGISTER } from "@/constants/routes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    return NextResponse.json({ body }, { status: 201 });
  } catch (err: unknown) {
    console.error(`❌ Error POST ${API_REGISTER}: ${err}`);
    return NextResponse.json({ error: err, message: "Terjadi kesalahan saat mendaftar akun baru Anda." }, { status: 500 });
  }
}