import prisma from "@/utils/connect";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const skillsetname = await prisma.skillsetname.findMany();
    return new NextResponse(JSON.stringify({ skillsetname, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 })
    );
  }
};
export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    console.log({ data });

    const skillsetname = await prisma.skillsetname.create({
      data: data,
    });
    return new NextResponse(JSON.stringify({ skillsetname, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", status: 500 })
    );
  }
};
