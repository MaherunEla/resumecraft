"use client";
import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";
import { useFormContext } from "react-hook-form";

const ProfilePage = () => {
  const { register } = useFormContext();
  const form = document.querySelector(".form");
  const fileInput: any = form?.querySelector(".file-input");
  const progrss = document.querySelector(".progrss");
  form?.addEventListener("click", () => {
    fileInput?.click();
  });
  // fileInput.onchange = ({ target }: any) => {
  //   let file = target.files[0];
  //   if (file) {
  //     let fileName = file.name;
  //     console.log(fileName);
  //   }
  // };

  fileInput?.addEventListener("change", (event: any) => {
    const target = event.target;
    let file = target.files[0];
    if (file) {
      let fileName = file.name;
      console.log(fileName);
    }
  });

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
          <div className="form">
            <input
              type="file"
              className="file-input"
              hidden
              {...register("image")}
            />
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
            <div className="progressfile">
              <div className="p-[10] w-[44px] h-[44px] bg-white flex items-center justify-center">
                <div className=" w-[24px] h-[24px] relative">
                  <Image src="/File.svg" fill alt="image" />
                </div>
              </div>
              <div className="flex items-start w-full justify-between">
                <div>
                  <p className="text-[#2D3643] text-base font-medium leading-[24px]">
                    Image Name.jpg
                  </p>
                  <p className="text-[12px] font-normal text-[#8897AE]">
                    3.54 MB
                  </p>
                </div>
                <Image src="/Remove.svg" width={20} height={20} alt="image" />
              </div>
            </div>
            <div className="progrssarea">
              <div className="progress-bar">
                <div className="progrsspercentage"></div>
              </div>
              <p className="propercent">50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
