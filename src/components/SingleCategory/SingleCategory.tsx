'use client'

import {  DuaCategory } from "@/types/types";
import Image from "next/image";
import imgIcon from "../../assets/category/005-fever.png";
import { AccordionTrigger } from "../ui/accordion";


const SingleCategory = ({ item }: { item: DuaCategory }) => {
    const totalDuasInCategory = item?.subcategories?.reduce(
        (total, subcategory) => total + subcategory?.duas?.length,
        0
      );

    return (
        <>
        <AccordionTrigger className="flex justify-between items-center p-4" 
        onClick={()=>console.log(item.category_id)}
        >
        <div
                  className="flex justify-start items-center   gap-4"
                  key={item.category_id}
                  
                  >
                  <div className="bg-[#CFE0E5] p-2 rounded-lg">
                    <Image src={imgIcon} alt="" />
                  </div>
                  <div>
                    <h1 className="text-[#1FA45B] font-semibold">
                      {item?.category_name_en}
                    </h1>
                    <p className="text-gray-500">
                      Subcategory:  {item.subcategories.length}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1>{totalDuasInCategory}</h1>
                  <p className="text-gray-500">Duas</p>
                </div>
                </AccordionTrigger>
                    </>
    );
};

export default SingleCategory;