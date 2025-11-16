// Deprecated - using static articles instead
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ articles: [] })
}
