"use client";
import Heading from "@/components/Heading";
import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

const SocialSite = () => {
  const { control, register } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "socialsite",
    }
  );

  const socialsite = [
    "Instagram",
    "Pinterest",
    "Twiter",
    "Linkedin",
    "Dribbble",
  ];
  // const {fields,append} = useFieldArray({
  //   control,
  //   name:""
  // })
  return (
    <div className="py-[129px] flex flex-col gap-[96px] items-center justify-center">
      <Heading
        title="Social Sites"
        subtitle="Language"
        stroffset={157}
        text="1/3"
      />

      <div className="flex flex-col gap-12 w-[836px]">
        <div className="flex   gap-7">
          <div className="flex flex-col gap-2 w-[477px]">
            <label className="text-base font-medium text-[#2D3643]"></label>
            <input
              type="text"
              className="input w-full"
              {...register("linkedin")}
            />
          </div>
          <button className="pt-5 text-center font-medium text-sm text-[#FF7A72]">
            Remove
          </button>
        </div>

        <div className="flex flex-col">
          <label className="text-base font-medium text-[#2D3643] pb-2">
            Select platform
          </label>
          <div className="flex">
            <select
              className="w-[477px] border border-[#D7DFE9] rounded-[4px] py-4 px-4"
              id="socialsite"
            >
              {socialsite.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <button className="text-sm font-medium px-4 text-center text-[#455468]">
              Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSite;
