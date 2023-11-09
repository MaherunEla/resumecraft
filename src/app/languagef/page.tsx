"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
const LanguagePage = () => {
  const { control, watch, register, setValue, getValues } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "language",
    control,
  });
  if (fields.length === 0) {
    append({
      languagename: "",
      level: "",
    });
  }
  console.log(fields, getValues());
  console.log(watch());
  const languages = watch(["language"]);
  const languageLavel = ["Native", "Professional working", "Elementary"];
  return (
    <div className=" py-[129px] flex flex-col gap-[96px] items-center justify-center">
      <Heading
        title="Language"
        subtitle="Experience"
        stroffset={125}
        text="4/8"
      />
      <div className="flex flex-col gap-12">
        {fields.map((item: any, index) => (
          <div
            className="flex items-center justify-center w-[836px] gap-7 "
            key={index}
          >
            <div className="w-full flex flex-col gap-2">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Language Name
              </label>
              <input
                type="text"
                className="input w-full h-[36px]"
                {...register(`language.${index}.languagename`)}
                onChange={async (e) => {
                  setValue(`language.${index}.languagename`, e.target.value);
                }}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Level
              </label>
              <select
                className="w-full h-[36px] border border-[#D7DFE9] rounded-[4px] py-[8px] px-4"
                onChange={(e) => {
                  setValue(`language.${index}.level`, e.target.value);
                }}
              >
                {languageLavel.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[836px] ">
        <div
          className="w-fit py-[10px] px-4 flex items-center  gap-[6px] cursor-pointer"
          onClick={() =>
            append({
              languagename: "",
              level: "",
            })
          }
        >
          <BsPlus />
          <p className="text-sm font-medium">Add New Language</p>
        </div>
        <div className="w-1/2 flex items-center justify-between pt-[80px]">
          <div className="w-fit px-7 py-[10px] border border-[#3B83F6]  bg-white  rounded-[4px] ">
            <Link
              href="/socialsite"
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
            <Link href="/experience" className="text-white font-medium text-sm">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePage;
