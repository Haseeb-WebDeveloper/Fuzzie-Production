"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function ProductImgScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            {/* <h1 className="text-4xl font-twk  font-normal text-black dark:text-white">
              Discover the magic of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Fuzzie
              </span>
            </h1> */}
          </>
        }
      >
        <Image
          src={`/temp-banner.png`}
          alt="hero"
          height={500}
          width={1400}
          className=" mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
