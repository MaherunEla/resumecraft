"use client";
import Heading from "@/components/Heading";
import React from "react";
import { useFormContext } from "react-hook-form";

const ProfilePage = () => {
  const { register } = useFormContext();
  return (
    <div className="py-[129px] flex flex-col gap-[96px] items-center justify-center">
      <Heading
        title={"Profile"}
        subtitle={"Contact Information"}
        stroffset={219.8}
        text="1/8"
      />
      <div className="w-[836px]">
        <div className="flex gap-7">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-[#2D3643]">Name</label>
            <input type="text" className="input w-full" {...register("name")} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-[#2D3643]">
              Title
            </label>
            <input
              type="text"
              className="input w-full"
              {...register("title")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-base font-medium text-[#2D3643]">Photo</label>
          <input
            type="text"
            className="input w-full"
            {...register("facebook")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
