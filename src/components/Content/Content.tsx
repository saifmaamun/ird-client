// 'use client'

import { DuaBrowserProps } from "@/types/types";
import Categories from "../Categories/Categories";
// import Duas from "../Duas/Duas";
import { DuaBrowser } from "../DuaBrowser/DuaBrowser";


const Content = ({ categories }: DuaBrowserProps) => {
// const Content = () => {
    // console.log(categories)
    return (
        <div className="flex w-full justify-center items-start">
        {/* <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-6"> */}
            <Categories/>
            {/* <Duas categories={categories}/> */}
            <DuaBrowser categories={categories}/>
        </div>
        
    );
};

export default Content;