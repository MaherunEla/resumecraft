"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { useFieldArray, useFormContext } from "react-hook-form";

const Skills = () => {
  const { control, watch, register, setValue, getValues } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "skills",
    control,
  });
  if (fields.length === 0) {
    append({
      skillsetname: "",
      skill: [""],
    });
  }
  console.log(watch());
  return (
    <div className=" py-[129px] flex flex-col gap-[96px] items-center justify-center">
      <Heading title="Skills" subtitle="" stroffset={0} text="8/8" />

      <div className="flex flex-col gap-12 w-[823px]">
        {fields.map((item, index) => (
          <div className="grid grid-cols-1 gap-7 " key={index}>
            <div className="flex flex-col w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Skills Set Name
              </label>
              <select
                className="w-full h-[36px] border border-[#D7DFE9] rounded-[4px] py-[8px] px-4"
                {...register(`skills.${index}.skillsetname`)}
                onChange={(e) => {
                  setValue(`skills.${index}.skillsetname`, e.target.value);
                }}
              >
                <option value="Designe">Designe</option>

                <option value="Development">Development</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Skills
              </label>
              <input
                type="text"
                className="input w-full h-[36px]"
                {...register(`skills.${index}.skill`)}
                onChange={async (e) => {
                  setValue(`skills.${index}.skill`, e.target.value);
                }}
              />
            </div>
          </div>
        ))}
        <div
          className="w-fit py-[10px] px-4 flex items-center  gap-[6px] cursor-pointer"
          onClick={() =>
            append({
              skillsetname: "",
              skill: [""],
            })
          }
        >
          <BsPlus />
          <p className="text-sm font-medium">Add New Language</p>
        </div>
        <div className="w-1/2 flex items-center justify-between pt-[80px]">
          <div className="w-fit px-7 py-[10px] border border-[#3B83F6]  bg-white  rounded-[4px] ">
            <Link
              href="/education"
              className=" text-[#3B83F6] font-medium text-sm"
            >
              Back
            </Link>
          </div>
          <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
            <Link href="/skills" className="text-white font-medium text-sm">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
