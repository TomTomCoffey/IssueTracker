import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Tom Coffey",
    },
    {
      id: 3,
      name: "John Smith",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //onsole.log(body);
  if (!body.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
