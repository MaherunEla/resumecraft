"use client";
import Heading from "@/components/Heading";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import axios from "axios";
import Progress from "../project/components/Progress";
import NextButton from "@/components/Button/NextButton";
import Link from "next/link";

const ProfilePage = () => {
  const { register, watch, setValue, control } = useFormContext();
  const [File, setFile] = useState({});

  type url = {
    success: number;
    url: string | null;
  };

  const formValues = watch();
  console.log({ formValues });
  const uploadImages = async (file: File): Promise<url> => {
    try {
      const options = {
        onUploadProgress: (progressEvent: any) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          console.log(`${loaded}kb of ${total}kb | ${percent}%`);
          console.log(file.name);
          setFile({
            FileName: file.name,
            total,
            percent,
          });
          //let progressHTML =

          //htmlprogress.innerHTML = Progress({ file, total, percent });
          // <Progress file={file} total={total} percent={percent} />;
        },
      };

      let formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "my-uploads");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/djfwg1dfa/image/upload",
        formData,
        options
      );
      console.log({ res });

      return {
        success: 1,
        url: res.data.secure_url,
      };
    } catch (error) {
      console.error({ error });
      return {
        success: 1,
        url: null,
      };
    }
  };

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
            <label className="text-base font-medium text-[#2D3643] ">
              Title
            </label>
            <input
              type="text"
              className="input w-full"
              {...register("title")}
            />
          </div>
        </div>
        <div className="pt-12 flex flex-col gap-2 w-full">
          <label className="pb-2 text-base font-medium text-[#2D3643]">
            Photo
          </label>
          {/* <input
            type="text"
            className="input w-full"
            {...register("facebook")}
          /> */}
          <div className="form relative">
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <input
                  type="file"
                  accept="image/*"
                  className="file-input opacity-0 w-full h-full absolute "
                  onChange={async (e: any) => {
                    const file = e.target.files[0];
                    const res = await uploadImages(file);
                    console.log(res);
                    setValue("image", res.url);
                    field.onChange(res.url);
                  }}
                />
              )}
            />
            {/* <input
              type="file"
              className="file-input opacity-0 w-full h-full absolute "
              {...register("image")}
              onChange={async (e: any) => {
                const file = e.target.files[0];
                const res = await uploadImages(file);
                console.log(res);
                setValue("image", res.url);
              }}
            /> */}
            <div className="w-[100px] h-[103px] relative">
              <Image src="/Group 58.svg" fill alt="image" />
            </div>
            <h6 className="pt-6 text-center text-sm text-[#2D3643] font-medium leading-[20.723px]">
              Drag & Drop image here{" "}
            </h6>
            <h6 className="text-center  text-sm text-[#2D3643]  font-medium leading-[20.723px]">
              or <span className="underline  text-[#3C83F6]">Upload File</span>
            </h6>
          </div>

          <p className="text-[12px] font-normal text-[#8897AE]">
            Upload .jpg or .png file with 16:9 ratio
          </p>
          <div className="progrss">
            <Progress file={File} />
          </div>
          <div className="w-1/2 flex items-end justify-end pt-[80px]">
            <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
              <Link href="/contact" className="text-white font-medium text-sm">
                Next
              </Link>
            </div>
          </div>
          {/* <div className="w-fit px-7 py-[10px] bg-[#3B83F6] rounded-[4px] ">
            <button type="submit" className="text-white font-medium text-sm">
              Submit
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
