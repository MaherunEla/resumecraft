"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useFieldArray, useFormContext } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchskill = () => {
  return axios.get("/api/skillname");
};
interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

const defaultOptions = [
  createOption("Designe"),
  createOption("Development"),
  createOption("Three"),
];

const Skills = () => {
  const { data, refetch } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchskill,
  });
  console.log(data?.data);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValuee] = useState<Option | null>();

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValuee(newOption);
    }, 1000);
  };
  const { control, watch, register, setValue, getValues } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "skills",
    control,
  });
  if (fields.length === 0) {
    append({
      skillsetname: [""],
      skill: [""],
    });
  }
  console.log(watch());
  const getdata = async () => {
    const data = await fetch("api/form", {
      method: "GET",
      cache: "no-store",
    });
    const res = data.json();
    console.log({ res });
  };

  return (
    <div className=" py-[129px] flex flex-col gap-[96px] items-center justify-center">
      <Heading title="Skills" subtitle="" stroffset={0} text="8/8" />

      <div className="flex flex-col gap-12 w-[823px]">
        {fields.map((item, index) => (
          <div className="grid grid-cols-1 gap-7 " key={index}>
            <div className="flex flex-col w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Skills Set Name
              </label>

              <CreatableSelect
                {...register(`skills.${index}.skillsetname`)}
                isClearable
                isDisabled={isLoading}
                isLoading={isLoading}
                onChange={(newValue) => {
                  setValuee(newValue);
                  setValue(`skills.${index}.skillsetname`, newValue);
                }}
                onCreateOption={handleCreate}
                options={options}
                value={value}
              />
              {/* <select
                className="w-full h-[36px] border border-[#D7DFE9] rounded-[4px] py-[8px] px-4"
                {...register(`skills.${index}.skillsetname`)}
                onChange={(e) => {
                  setValue(`skills.${index}.skillsetname`, e.target.value);
                }}
              >
                <option value="Designe">Designe</option>

                <option value="Development">Development</option>
              </select> */}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-base font-medium text-[#2D3643] pb-2">
                Skills
              </label>

              <CreatableSelect
                {...register(`skills.${index}.skill`)}
                isMulti
                isClearable
                isDisabled={isLoading}
                isLoading={isLoading}
                onChange={(newValue) => {
                  setValuee(newValue);
                  setValue(`skills.${index}.skill`, newValue);
                }}
                onCreateOption={handleCreate}
                options={options}
                value={value}
              />

              {/* <input
                type="text"
                className="input w-full h-[36px]"
                {...register(`skills.${index}.skill`)}
                onChange={async (e) => {
                  setValue(`skills.${index}.skill`, e.target.value);
                }}
              /> */}
            </div>
          </div>
        ))}
        <div
          className="w-fit py-[10px] px-4 flex items-center  gap-[6px] cursor-pointer"
          onClick={() =>
            append({
              skillsetname: [""],
              skill: [""],
            })
          }
        >
          <BsPlus />
          <p className="text-sm font-medium">Add New Language</p>
        </div>
        <div className="w-1/2 flex items-center justify-between pt-[80px]">
          <div className="w-fit px-7 py-[10px] border border-[#3B83F6]  bg-white  rounded-[4px] ">
            <Link
              href="/education"
              className=" text-[#3B83F6] font-medium text-sm"
            >
              Back
            </Link>
          </div>
          <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
            <button type="submit" className="text-white font-medium text-sm">
              Submit
            </button>
          </div>
          <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
            <button
              type="button"
              onClick={getdata}
              className="text-white font-medium text-sm"
            >
              Get data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
