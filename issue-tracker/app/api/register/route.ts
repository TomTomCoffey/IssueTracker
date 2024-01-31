import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "@/prisma/client";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: validation.data.email,
    },
  });

  if (user) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(validation.data.password, 10);

  await prisma.user.create({
    data: {
      email: validation.data.email,
      hashedPassword,
    },
  });

  return NextResponse.json({ email: body.email });
}
