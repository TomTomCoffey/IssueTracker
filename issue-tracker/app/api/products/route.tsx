import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.products.findMany({
    ////in here you can filter, sort, etc.
  });
  if (!products) {
    return NextResponse.json({ error: "products not found" }, { status: 404 });
  }
  return NextResponse.json(products);
}

/////////POST

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // const product = await prisma.products.findUnique({
  //   where: {
  //     name: body.name,
  //   },
  // });

  // if (product) {
  //   return NextResponse.json(
  //     { error: "product already exists" },
  //     { status: 400 }
  //   );
  // }

  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(newProduct, { status: 201 });
}
