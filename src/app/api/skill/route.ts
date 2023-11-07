import prisma from "@/utils/connect";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const Allskill = await prisma.skill.findMany();
    return new NextResponse(JSON.stringify({ Allskill, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 })
    );
  }
};
