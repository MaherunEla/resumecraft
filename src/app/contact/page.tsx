"use client";
import Heading from "@/components/Heading";
import React from "react";
import { useFormContext } from "react-hook-form";
const ContactPage = () => {
  const { register } = useFormContext();
  return (
    <div className=" py-[129px] flex flex-col gap-[96px] items-center justify-center">
      <Heading
        title="Contact Information"
        subtitle="Social Sites"
        stroffset={188.4}
        text="1/2"
      />
      <div className="flex flex-col gap-12 w-[836px]">
        <div className="flex gap-7">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-[#2D3643]">
              Phone Number
            </label>
            <input
              type="text"
              className="input w-full"
              {...register("phnNumber")}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-[#2D3643]">
              Email Address
            </label>
            <input
              type="text"
              className="input w-full"
              {...register("email")}
            />
          </div>
        </div>

        <div className="flex gap-7">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-[#2D3643]">
              Website
            </label>
            <input type="text" className="input" {...register("website")} />
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

export default ContactPage;
