"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
const ExperiencePage = () => {
  const { control, watch, register, setValue, getValues } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "experience",
    control,
  });
  if (fields.length === 0) {
    append({
      company: "",
      logo: "",
      location: "",
      position: "",
      startmonth: "",
      startyear: "",
      endmonth: "",
      endyear: "",
      details: "",
    });
  }
  console.log(watch());
  return (
    <div className=" py-[129px] flex flex-col gap-[96px] items-center justify-center">
      <Heading
        title="Experience"
        subtitle="Latest Project"
        stroffset={94.2}
        text="5/8"
      />
      <div className="flex flex-col gap-12">
        {fields.map((item: any, index) => (
          <div className="grid grid-cols-2 gap-12 w-[823px]" key={index}>
            <div className="flex flex-col">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Company/ Organization
              </label>
              <input
                type="text"
                className="input w-full h-[36px]"
                {...register(`experience.${index}.company`)}
                onChange={async (e) => {
                  setValue(`experience.${index}.company`, e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Company/ Organization Logo
              </label>
              <input
                type="file"
                className="input w-full h-[36px]"
                {...register(`experience.${index}.logo`)}
                onChange={async (e: any) => {
                  const l = e.target.files[0];
                  const file = URL.createObjectURL(l);
                  console.log(file);
                  setValue(`experience.${index}.logo`, file);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Location
              </label>
              <input
                type="text"
                className="input w-full h-[36px]"
                {...register(`experience.${index}.location`)}
                onChange={async (e) => {
                  setValue(`experience.${index}.location`, e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Position
              </label>
              <input
                type="text"
                placeholder="Ex: UX Designer, Graphic Designer, etc."
                className="input w-full h-[36px]"
                {...register(`experience.${index}.position`)}
                onChange={async (e) => {
                  setValue(`experience.${index}.position`, e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Start From
              </label>
              <div className="flex gap-2">
                <select
                  className="w-full h-[36px] border border-[#D7DFE9] rounded-[4px] py-[8px] px-4"
                  {...register(`experience.${index}.startmonth`)}
                  onChange={(e) => {
                    setValue(`experience.${index}.startmonth`, e.target.value);
                  }}
                >
                  <option value="">Month</option>

                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select
                  className="w-full h-[36px] border border-[#D7DFE9] rounded-[4px] py-[8px] px-4"
                  {...register(`experience.${index}.startyear`)}
                  onChange={(e) => {
                    setValue(`experience.${index}.startyear`, e.target.value);
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
            </div>
            <div className="flex flex-col">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Ending In
              </label>
              <div className="flex gap-2">
                <select
                  className="w-full h-[36px] border border-[#D7DFE9] rounded-[4px] py-[8px] px-4"
                  {...register(`experience.${index}.endmonth`)}
                  onChange={(e) => {
                    setValue(`experience.${index}.endmonth`, e.target.value);
                  }}
                >
                  <option value="">Month</option>

                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select
                  className="w-full h-[36px] border border-[#D7DFE9] rounded-[4px] py-[8px] px-4"
                  {...register(`experience.${index}.endyear`)}
                  onChange={(e) => {
                    setValue(`experience.${index}.endyear`, e.target.value);
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
            </div>
            <div className="flex flex-col col-span-2 ">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Details
              </label>
              <textarea
                rows={6}
                cols={20}
                className="input w-full h-[159px]"
                placeholder="Ex: My responsibilities include..."
                {...register(`experience.${index}.details`)}
                onChange={async (e) => {
                  setValue(`experience.${index}.details`, e.target.value);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-[836px] ">
        <div
          className="w-fit py-[10px] px-4 flex items-center  gap-[6px] cursor-pointer"
          onClick={() =>
            append({
              company: "",
              logo: "",
              location: "",
              position: "",
              startmonth: "",
              startyear: "",
              endmonth: "",
              endyear: "",
              details: "",
            })
          }
        >
          <BsPlus />
          <p className="text-sm font-medium">Add New Language</p>
        </div>
        <div className="w-1/2 flex items-center justify-between pt-[80px]">
          <div className="w-fit px-7 py-[10px] border border-[#3B83F6]  bg-white  rounded-[4px] ">
            <Link
              href="/languagef"
              className=" text-[#3B83F6] font-medium text-sm"
            >
              Back
            </Link>
          </div>
          <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
            <Link href="/project" className="text-white font-medium text-sm">
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
