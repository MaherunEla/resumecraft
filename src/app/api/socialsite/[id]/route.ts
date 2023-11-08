import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  console.log({ params });
  const id = +params?.id;
  console.log({ id });
  try {
    const socialsite = await prisma.socialsite.findMany({
      where: { profileId: id },
    });
    return new NextResponse(JSON.stringify({ socialsite, status: 200 }));
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
    const socialsitedata = data.map((item: any) => ({
      url: item.url,
      profileId: id,
    }));

    const socialsite = await prisma.socialsite.createMany({
      data: socialsitedata,
    });
    return new NextResponse(JSON.stringify({ socialsite, status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wront", status: 500 })
    );
  }
};
