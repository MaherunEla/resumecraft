import prisma from "@/utils/connect";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const skillsatname = await prisma.formValues.findMany({
      select: {
        skills: true,
      },
    });
    return new NextResponse(JSON.stringify({ skillsatname, status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 })
    );
  }
};
