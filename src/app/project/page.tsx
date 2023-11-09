"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
const ProjectPage = () => {
  const { control, watch, register, setValue, getValues } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "project",
    control,
  });
  if (fields.length === 0) {
    append({
      projecttitle: "",
      projectlink: "",
      description: "",
    });
  }
  console.log(watch());
  return (
    <div className=" py-[129px] flex flex-col gap-[96px] items-center justify-center">
      <Heading
        title="Latest Project"
        subtitle="Education"
        stroffset={62.8}
        text="6/8"
      />
      <div className="flex flex-col gap-12 w-[823px]">
        {fields.map((item, index) => (
          <div className="grid grid-cols-2 gap-7 " key={index}>
            <div className="flex flex-col w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Project Title
              </label>
              <input
                type="text"
                className="input w-full h-[36px]"
                {...register(`project.${index}.projecttitle`)}
                onChange={async (e) => {
                  setValue(`project.${index}.projecttitle`, e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Project Link
              </label>
              <input
                type="text"
                className="input w-full h-[36px]"
                placeholder="http://"
                {...register(`project.${index}.projectlink`)}
                onChange={async (e) => {
                  setValue(`project.${index}.projectlink`, e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col col-span-2  w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Description
              </label>
              <textarea
                rows={60}
                cols={10}
                className="input w-full h-[156px]"
                placeholder="Ex: This project  is so much..."
                {...register(`project.${index}.description`)}
                onChange={async (e) => {
                  setValue(`project.${index}.description`, e.target.value);
                }}
              />
            </div>
          </div>
        ))}
        <div
          className="w-fit py-[10px] px-4 flex items-center  gap-[6px] cursor-pointer"
          onClick={() =>
            append({
              projecttitle: "",
              projectlink: "",
              description: "",
            })
          }
        >
          <BsPlus />
          <p className="text-sm font-medium">Add New Project</p>
        </div>
        <div className="w-1/2 flex items-center justify-between pt-[80px]">
          <div className="w-fit px-7 py-[10px] border border-[#3B83F6]  bg-white  rounded-[4px] ">
            <Link
              href="/experience"
              className=" text-[#3B83F6] font-medium text-sm"
            >
              Back
            </Link>
          </div>
          {/* <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
            <button type="submit" className="text-white font-medium text-sm">
              Submit
            </button>
          </div> */}
          <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
            <Link href="/education" className="text-white font-medium text-sm">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
