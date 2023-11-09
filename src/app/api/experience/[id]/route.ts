import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  console.log({ params });
  const id = +params?.id;
  console.log({ id });
  try {
    const experience = await prisma.experience.findMany({
      where: { profileId: id },
    });
    return new NextResponse(JSON.stringify({ experience, status: 200 }));
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
    const experiencedata = data.map((item: any) => ({
      company: item.company,
      companyLogo: item.logo,
      location: item.location,
      position: item.position,
      startMonth: item.startmonth,
      startYear: item.startyear,
      endMonth: item.endmonth,
      endYear: item.endyear,
      details: item.details,
      profileId: id,
    }));
    console.log({ experiencedata });

    const experience = await prisma.experience.createMany({
      data: experiencedata,
    });
    return new NextResponse(JSON.stringify({ experience, status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wront", status: 500 })
    );
  }
};
