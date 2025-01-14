

// import Image from "next/image";
// import imgIcon from "../../assets/category/005-fever.png";
import { DuaCategory } from "@/types/types";
import { getDuas } from "@/actions/get-duas";
import { ScrollArea } from "../ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "../ui/accordion";
import { Button } from "../ui/button";
import SingleCategory from "../SingleCategory/SingleCategory";


const CategoryLists = async () => {
  
  const data = await getDuas();

  return (
    <ScrollArea>
      <Accordion type="single" collapsible>
        {data?.map((item: DuaCategory) => {
          
          return (
            <AccordionItem
              key={item.category_id}
              value={item.category_id.toString()}
              className="my-4 bg-[#E8F0F5] w-[430px]  rounded-lg"
            >
              {/* category Head */}
             
             {/* accordian trigger */}
                <SingleCategory item={item}/>
              
              {/* sub category list */}
              <AccordionContent>
                <div className="space-y-1 bg-white px-4 pb-4">
                  {item.subcategories.map((subcategory) => (
                    <Button
                      key={subcategory.subcategory_id}
                      variant="ghost"
                      // variant={selectedSubcategory === subcategory.subcategory_id ? "secondary" : "ghost"}
                      className="w-full justify-start text-left"
                      // onClick={() => handleSubcategoryClick(subcategory)}
                    >
                      {subcategory.subcategory_name_en}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </ScrollArea>
  );
};

export default CategoryLists;
/*
<ScrollArea>
      <Accordion type="single" collapsible>
      {data?.map((item: DuaCategory) => {
        const totalDuasInCategory = item.subcategories.reduce(
          (total, subcategory) => total + subcategory.duas.length,
          0
        );
        return (
          <div key={item.category_id} className="my-4 bg-[#E8F0F5] min-w-[430px]  rounded-lg">
            <div className="flex justify-between items-center p-4">
              <div
                className="flex justify-start items-center   gap-4"
                key={item.category_id}
              >
                <div className="bg-[#CFE0E5] p-2 rounded-lg">
                  <Image src={imgIcon} alt="" />
                </div>
                <div>
                  <h1 className="text-[#1FA45B] font-semibold">
                    {item.category_name_en}
                  </h1>
                  <p className="text-gray-500">
                    Subcategory: {item.subcategories.length}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1>{totalDuasInCategory}</h1>
                <p className="text-gray-500">Duas</p>
              </div>
            </div>
          </div>
        );
      })}
      </Accordion>
    </ScrollArea>
*/
