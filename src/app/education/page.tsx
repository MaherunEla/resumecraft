"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
const EducationPage = () => {
  const { control, watch, register, setValue, getValues,formState:{errors} } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "education",
    control,
  });
  if (fields.length === 0) {
    append({
      websitelink: "",
      year: "",
      title: "",
    });
  }
  console.log(watch());
  return (
    <div className=" py-[129px] flex flex-col gap-[96px] items-center justify-center">
      <Heading
        title="Education"
        subtitle="Skills"
        stroffset={28.888}
        text="7/8"
      />
      <div className="flex flex-col gap-12 w-[823px]">
        {fields.map((item, index) => (
          <div className="grid grid-cols-2 gap-7 " key={index}>
            <div className="flex flex-col w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Website Link
              </label>
              <input
                type="text"
                className="input w-full h-[36px]"
                placeholder="http://"
                {...register(`education.${index}.websitelink`)}
                onChange={async (e) => {
                  setValue(`education.${index}.websitelink`, e.target.value);
                }}
              />
             {errors.education && errors.education.[index] && errors.education.[index].websitelink && (
    <p className="error">{errors.education.[index].websitelink.message as string}</p>
  )}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Year
              </label>
              <select
                className="w-full h-[36px] border border-[#D7DFE9] rounded-[4px] py-[8px] px-4"
                {...register(`education.${index}.year`)}
                onChange={(e) => {
                  setValue(`education.${index}.year`, e.target.value);
                }}
              >
                <option value="">Year</option>

                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div className="flex flex-col col-span-2  w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Title
              </label>
              <input
                type="text"
                className="input w-full h-[36px]"
                {...register(`education.${index}.title`)}
                onChange={async (e) => {
                  setValue(`education.${index}.title`, e.target.value);
                }}
              />
            </div>
          </div>
        ))}
        <div
          className="w-fit py-[10px] px-4 flex items-center  gap-[6px] cursor-pointer"
          onClick={() =>
            append({
              websitelink: "",
              year: "",
              title: "",
            })
          }
        >
          <BsPlus />
          <p className="text-sm font-medium">Add New Education</p>
        </div>
        <div className="w-1/2 flex items-center justify-between pt-[80px]">
          <div className="w-fit px-7 py-[10px] border border-[#3B83F6]  bg-white  rounded-[4px] ">
            <Link
              href="/project"
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
            <Link href="/skills" className="text-white font-medium text-sm">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
