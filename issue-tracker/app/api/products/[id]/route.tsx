import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: {
    id: number;
  };
}

//// GET
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.products.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!product) {
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

/////PUT

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  }

  const product = await prisma.products.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!product) {
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  }

  const updatedProduct = await prisma.products.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const checkProduct = prisma.products.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!checkProduct) {
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  }

     await prisma.products.delete({
    where: {
      id: parseInt(params.id),
    },
  });

  return NextResponse.json({ id: params.id }); ////putting in an object is optional
}
