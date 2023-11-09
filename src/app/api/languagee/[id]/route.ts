import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  console.log({ params });
  const id = +params?.id;
  console.log({ id });
  try {
    const language = await prisma.language.findMany({
      where: { profileId: id },
    });
    return new NextResponse(JSON.stringify({ language, status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 })
    );
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  console.log({ params });
  const id = +params?.id;
  console.log({ id });
  const data = await req.json();
  console.log({ data });

  try {
    const languagedata = data.map((item: any) => ({
      languageName: item.languagename,
      level: item.level,
      profileId: id,
    }));

    const language = await prisma.language.createMany({
      data: languagedata,
    });
    return new NextResponse(JSON.stringify({ language, status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wront", status: 500 })
    );
  }
};
