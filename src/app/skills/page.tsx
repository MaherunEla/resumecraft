"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useFieldArray, useFormContext } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Changa } from "next/font/google";

const fetchskillname = () => {
  return axios.get("/api/skillsetname");
};
const fetchAllSkill = () => {
  return axios.get("/api/skill");
};
interface Option {
  readonly label: string;
  readonly value: string;
}
interface Profile {
  name: string;
  title: string;
  image: string;
}
const Skills = () => {
  const [defaultskilllist, setDefaultskilllist] = useState<Option[]>();
  const [idforskill, setIdforskill] = useState<Number>();
  const [profiledata, setProfiledata] = useState<Profile[]>();
  const { data, refetch } = useQuery({
    queryKey: ["skillsetname"],
    queryFn: fetchskillname,
  });
  const { data: skills, refetch: skillRefetch } = useQuery({
    queryKey: ["Allskills"],
    queryFn: fetchAllSkill,
  });
  console.log(skills?.data.Allskill);
  console.log(data?.data.skillsetname);

  // const defaultOptions = [
  //   createOption("Designe"),
  //   createOption("Development"),
  //   createOption("Three"),
  // ];

  const skillsetnames = data?.data.skillsetname.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
  console.log({ defaultOptions: skillsetnames });

  const handleskill = async (newValue: any) => {
    console.log(typeof newValue);

    axios
      .post("http://localhost:3000/api/skillsetname", { name: newValue })
      .then((res) => {
        console.log({ res });
      });
  };

  const handleskilllist = async (newValue: any) => {
    console.log(newValue);
    axios.post(`http://localhost:3000/api/skill/${idforskill}`, {
      name: newValue,
    });
  };

  const { mutate } = useMutation({
    mutationFn: handleskilllist,
  });

  const createskill = (newValue: any) => {
    console.log(newValue);
    mutate(newValue);
  };

  const filterskill = (id: any) => {
    // const skill = axios.get(`http://localhost:3000/api/skill/${id}`);
    // return skill;
    const skill = skills?.data.Allskill.filter(
      (e: any) => e.SkillSetNameId === id
    );
    console.log({ skill });
    return skill;
    // defaultskillvalue = res?skill.map((item: any) => ({
    //   id: item.id,
    //   label: item.name,
    // }));
  };

  const addnewskill = (id: any, data: any) => {
    return axios.put(`http://localhost:3000/api/skill/${id}`, data);
  };

  const defaultOptionskill = (data: any) => {
    console.log(data);
    return data.map((item: any) => ({
      value: item.id,
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
  const formValues = watch();
  console.log({ formValues });

  //setProfiledata([formValues.name, formValues.title, formValues.image]);

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
                  setValue(`skills.${index}.skillsetname`, newValue.label);
                  setIdforskill(newValue?.value);
                }}
                onCreateOption={handleskill}
                options={skillsetnames}
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

                    setValue(`skills.${index}.skill`, skillselected);
                  } else {
                    setValue(`skills.${index}.skill`, []);
                  }
                }}
                options={skills?.data.Allskill?.filter(
                  (e: any) => e.SkillSetNameId == idforskill || !idforskill
                ).map((e: any) => {
                  return {
                    label: e.name,
                    value: e.name,
                  };
                })}
                //onCreateOption={handleskilllist}
                onCreateOption={createskill}
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
          {/* <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
            <button
              type="button"
              onClick={getdata}
              className="text-white font-medium text-sm"
            >
              Get data
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
