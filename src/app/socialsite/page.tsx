"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import React, { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { BsPlus } from "react-icons/bs";

const SocialSite = () => {
  const { control, register, formState, setValue, watch, getValues } =
    useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: "socialsite",
      control,
    }
  );
  if (fields.length === 0) {
    append({
      value: "Site Name",
      url: "",
    });
  }
  console.log(fields, getValues());
  const socialsites = watch(["socialsite"]);
  console.log(socialsites);

  const [site, setSite] = useState<string>("");
  console.log(site);

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
      {/* {socialsite.map((social, index) => (
        <label className="text-base font-medium text-[#2D3643]" key={index}>
          {social}
        </label>
      ))} */}

      <div className="flex flex-col gap-12 w-[836px]">
        <div className="flex flex-col gap-5">
          {fields.map((item: any, index) => {
            // console.log(new URL(item.url));
            // const v = watch([""]);
            // console.log(v);
            const valuename = watch(`socialsite.${index}.value`);
            console.log({ item });

            return (
              <div className="flex  gap-7" key={index}>
                <div className="flex flex-col gap-2 w-[477px]">
                  {/* <input {...register(`socialsite.${index}.value`)} /> */}
                  <label
                    className="text-base capitalize font-medium text-[#2D3643]"
                    key={index}
                    {...register(`socialsite.${index}.value`)}
                  >
                    {valuename ? valuename : "Platform Name"}
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    {...register(`socialsite.${index}.url`)}
                    onChange={async (e) => {
                      setValue(`socialsite.${index}.url`, e.target.value);
                      const platformName = new URL(
                        e.target.value
                      ).hostname.split(".")[1];
                      setValue(`socialsite.${index}.value`, platformName);
                    }}
                  />
                </div>
                <button
                  onClick={() => remove(index)}
                  className="pt-5 text-center font-medium text-sm text-[#FF7A72]"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col">
          <div
            className="w-fit py-[10px] px-4 flex items-center  gap-[6px] cursor-pointer"
            onClick={() =>
              append({
                value: "",
                url: "",
              })
            }
          >
            <BsPlus />
            <p className="text-sm font-medium">Add New Language</p>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-between pt-[80px]">
          <div className="w-fit px-7 py-[10px] border border-[#3B83F6]  bg-white  rounded-[4px] ">
            <Link
              href="/contact"
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
            <Link href="/languagef" className="text-white font-medium text-sm">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSite;
