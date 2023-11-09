import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  console.log({ params });
  const id = +params?.id;
  console.log({ id });
  try {
    const project = await prisma.project.findMany({
      where: { profileId: id },
    });
    return new NextResponse(JSON.stringify({ project, status: 200 }));
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
    const projectdata = data.map((item: any) => ({
      projectTitle: item.projecttitle,
      projectLink: item.projectlink,
      description: item.description,
      profileId: id,
    }));
    console.log({ projectdata });

    const project = await prisma.project.createMany({
      data: projectdata,
    });
    return new NextResponse(JSON.stringify({ project, status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wront", status: 500 })
    );
  }
};
