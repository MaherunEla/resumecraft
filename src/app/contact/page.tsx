"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
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
        <div className="w-1/2 flex items-center justify-between pt-[80px]">
          <div className="w-fit px-7 py-[10px] border border-[#3B83F6]  bg-white  rounded-[4px] ">
            <Link
              href="/profile"
              className=" text-[#3B83F6] font-medium text-sm"
            >
              Back
            </Link>
          </div>
          <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
            <Link href="/socialsite" className="text-white font-medium text-sm">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
