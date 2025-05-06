import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validate = schema.safeParse(body);

  if (!validate.success)
    return NextResponse.json(validate.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json("product not found", { status: 404 });

  return NextResponse.json(
    {
      id: 3,
      name: validate.data.name,
      price: validate.data.price,
    },
    { status: 201 }
  );
}
