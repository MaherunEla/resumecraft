"use client";
import Heading from "@/components/Heading";
import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

const SocialSite = () => {
  const { register } = useFormContext();
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
        <div className="flex gap-7">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-[#2D3643]">
              LinkedIn
            </label>
            <input
              type="text"
              className="input w-full"
              {...register("linkedin")}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-[#2D3643]">
              Instragram
            </label>
            <input
              type="text"
              className="input w-full"
              {...register("instragram")}
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-[#2D3643]">
              Pinterest
            </label>
            <input type="text" className="input" {...register("pinterest")} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-[#2D3643]">
              Address
            </label>
            <input type="text" className="input" {...register("address")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSite;
