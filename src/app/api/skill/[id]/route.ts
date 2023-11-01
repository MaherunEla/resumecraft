import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  console.log({ params });
  const id = +params?.id;
  console.log({ id });
  try {
    const skill = await prisma.skill.findMany({
      where: { SkillSetNameId: id },
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
  try {
    const skill = await prisma.skill.create({
      data: { ...data, SkillSetNameId: id },
    });
    return new NextResponse(JSON.stringify({ skill, status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong", status: 500 })
    );
  }
};
