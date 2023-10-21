"use client";
import Heading from "@/components/Heading";
import React, { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

const SocialSite = () => {
  const { control, register, formState, setValue } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: "socialsite",
      control,
    }
  );
  console.log(fields);
  const geturl = (url: any) => {
    console.log(url);
    const domain = new URL(url).hostname;
    console.log(domain);
  };

  const [site, setSite] = useState<string>("");
  console.log(site);

  const socialsiteoption = [
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
      {/* {socialsite.map((social, index) => (
        <label className="text-base font-medium text-[#2D3643]" key={index}>
          {social}
        </label>
      ))} */}

      <div className="flex flex-col gap-12 w-[836px]">
        <div className="flex flex-col gap-5">
          {fields.map((item: any, index) => {
            console.log({ item });
            // console.log(new URL(item.url));

            const platformName = new URL(
              item.url ? item.url : "http://PlatformName.com"
            ).hostname.split(".")[1];
            return (
              <div className="flex  gap-7" key={index}>
                <div className="flex flex-col gap-2 w-[477px]">
                  <input hidden {...register(`socialsite.${index}.value`)} />
                  <label
                    className="text-base capitalize font-medium text-[#2D3643]"
                    key={index}
                  >
                    {platformName}
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    {...register(`socialsite.${index}.url`)}
                    onChange={async (e) => {
                      setValue(`socialsite.${index}.url`, e.target.value);
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
          <label className="text-base font-medium text-[#2D3643] pb-2">
            Select platform
          </label>
          <div className="flex">
            <select
              className="w-[477px] border border-[#D7DFE9] rounded-[4px] py-4 px-4"
              id="socialsite"
              onChange={(e) => {
                setSite(e.target.value);
              }}
            >
              {socialsiteoption.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="text-sm font-medium px-4 text-center text-[#455468]"
              onClick={() =>
                append({
                  value: "",
                  url: "",
                })
              }
            >
              Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSite;
