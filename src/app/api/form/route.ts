import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const formdata = await prisma.formValues.findMany();
    return new NextResponse(JSON.stringify({ formdata, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", status: 500 })
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const res = await prisma.formValues.create({
      data: data,
    });
    return new NextResponse(JSON.stringify({ res, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", status: 500 })
    );
  }
};
