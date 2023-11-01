"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useFieldArray, useFormContext } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Changa } from "next/font/google";

const fetchskillname = () => {
  return axios.get("/api/skillsetname");
};
interface Option {
  readonly label: string;
  readonly id: string;
}

const Skills = () => {
  const [defaultskilllist, setDefaultskilllist] = useState<Option[]>();
  const [idforskill, setIdforskill] = useState<Number>();
  const { data, refetch } = useQuery({
    queryKey: ["skillsetname"],
    queryFn: fetchskillname,
  });
  console.log(data?.data.skillsetname);

  // const defaultOptions = [
  //   createOption("Designe"),
  //   createOption("Development"),
  //   createOption("Three"),
  // ];

  const defaultOptions = data?.data.skillsetname.map((item: any) => ({
    id: item.id,
    label: item.name,
  }));
  console.log({ defaultOptions });

  const handleskill = async (newValue: any) => {
    console.log(typeof newValue);

    axios
      .post("http://localhost:3000/api/skillsetname", { name: newValue })
      .then((res) => {
        console.log({ res });

        // QueryClient.invalidateQueries({queryKey:["skillsetname"]})
      });
  };
  const handleskilllist = async (newValue: any) => {
    console.log(newValue);
    axios.post(`http://localhost:3000/api/skill/${id}`, { name: newValue });
  };
  const filterskill = (id: any) => {
    const skill = axios.get(`http://localhost:3000/api/skill/${id}`);

    return skill;
    // defaultskillvalue = res?skill.map((item: any) => ({
    //   id: item.id,
    //   label: item.name,
    // }));
  };

  const addnewskill = (id: any) => {
    return axios.put(`http://localhost:3000/api/skill/${id}`);
  };

  const defaultOptionskill = (data: any) => {
    console.log(data.data.skill);
    return data.data.skill.map((item: any) => ({
      id: item.id,
      label: item.name,
    }));
    // defaultskillvalue = data.data.skill.map((item: any) => ({
    //   id: item.id,
    //   label: item.name,
    // }));
    // return defaultskillvalue;
  };

  // const defaultOptionsskill: readonly Option[] = [
  //   { value: "ocean", label: "Ocean" },
  //   { value: "blue", label: "Blue" },
  //   { value: "purple", label: "Purple" },
  //   { value: "red", label: "Red" },
  //   { value: "orange", label: "Orange" },
  //   { value: "yellow", label: "Yellow" },
  //   { value: "green", label: "Green" },
  // ];
  const { control, watch, register, setValue, getValues } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "skills",
    control,
  });
  if (fields.length === 0) {
    append({
      skillsetname: "",
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
    console.log(res);
  };
  console.log({ idforskill });
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
                onChange={async (newValue) => {
                  console.log(newValue?.id);
                  if (newValue) {
                    setValue(`skills.${index}.skillsetname`, newValue?.label);
                    const data = await filterskill(newValue?.id);
                    console.log(typeof newValue?.id);
                    setIdforskill(newValue?.id);

                    console.log({ data });
                    const defaultskillvalue = await defaultOptionskill(data);
                    setDefaultskilllist(defaultskillvalue);
                    console.log({ defaultskillvalue });
                    refetch();
                  }
                }}
                onCreateOption={handleskill}
                options={defaultOptions}
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
                onChange={async (newValue) => {
                  console.log({ newValue });
                  if (newValue) {
                    const skillselected = newValue.map((item) => item.label);
                    console.log({ skillselected });
                    const data = await addnewskill(idforskill, skillselected);

                    setValue(`skills.${index}.skill`, skillselected);
                  } else {
                    setValue(`skills.${index}.skill`, []);
                  }
                }}
                options={defaultskilllist}
                onCreateOption={handleskilllist}
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
              skillsetname: "",
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
