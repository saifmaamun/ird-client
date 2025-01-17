

import { DuaBrowserProps } from "@/types/types";
import Categories from "../Categories/Categories";
// import Duas from "../Duas/Duas";
import { DuaBrowser } from "../DuaBrowser/DuaBrowser";



const Content = ({ categories }: DuaBrowserProps) => {

    return (
        <div className="flex w-full justify-start items-start gap-x-4">
        {/* <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-6"> */}
            <Categories/>
            {/* <Duas categories={categories}/> */}
            <DuaBrowser categories={categories}/>
        {/* </div> */}
        </div>
        
    );
};

export default Content;