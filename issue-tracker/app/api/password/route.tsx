import bcrypt from "bcrypt";
import { z } from "zod";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

const schema = z.object({
  // email: z.string().email(),
  password: z.string().min(8),
});

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "Email not found" }, { status: 400 });
  }

  const passwordMatch = await bcrypt.compare(
    body.password,
    user.hashedPassword!
  );
  if (!passwordMatch) {
    return NextResponse.json({ error: "Password incorrect" }, { status: 400 });
  }

  await prisma.user.update({
    where: {
      email: body.email,
    },
    data: {
      hashedPassword: await bcrypt.hash(body.newPassword, 10),
    },
  });
  return NextResponse.json({ message: "Password updated" });
}
