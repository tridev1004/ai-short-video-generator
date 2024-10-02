"use client"

import Image from "next/image";
import React from "react";
import { useState } from "react";

const SelectStyles = ({onUserSelect}) => {
  const styleOptions = [
    {
      name: "Realistic",
      image: "/real.png",
    },
    {
      name: "Cartoon",
      image: "/cartoon.png",
    },
    {
      name: "Comic",
      image: "/comic.png",
    },
    {
      name: "WaterColor",
      image: "/watercolor.png",
    },
    {
      name: "GTA",
      image: "/gta.png",
    },
  ];
  const [selectedOption,setSelectedOption]=useState();
  return (
    <div className="mt-7">
      {" "}
      <h2 className="text-2xl font-bold text-primary">Style</h2>
      <p className="text-gray-500">Select your Video Style</p>
      <div className="grid grid-cols-2 gap-5 mt-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {styleOptions.map((item, index) => (
          <div className={`relative transition-all cursor-pointer hover:scale-105 rounded-xl ${selectedOption==item.name && 'border-4 border-primary'}`}>
            <Image
              src={item.image}
              width={100}
              height={100}
              className="object-cover w-full h-48 rounded-lg" onClick={()=>{setSelectedOption(item.name)

                onUserSelect('imageStyle',item.name);
              }}
            />
            <h2  className="absolute bottom-0 w-full p-1 text-center text-white bg-black rounded-b-lg">{item.name}   </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyles;
