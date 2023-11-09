import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  console.log({ params });
  const id = +params?.id;
  console.log({ id });
  try {
    const skill = await prisma.skills.findMany({
      where: { profileId: id },
    });
    return new NextResponse(JSON.stringify({ skill, status: 200 }));
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
  console.log(data);

  try {
    const skilldata = data.map((item: any) => ({
      skillsSetName: item.skillsetname,
      Skills: item.skill,
      profileId: id,
    }));
    console.log({ skilldata });

    const skill = await prisma.skills.createMany({
      data: skilldata,
    });
    return new NextResponse(JSON.stringify({ skill, status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wront", status: 500 })
    );
  }
};
