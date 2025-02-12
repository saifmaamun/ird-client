import { DuaCategory } from "@/types/types";
import { getDuas } from "@/actions/get-duas";
import { ScrollArea } from "../ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem } from "../ui/accordion";

import SingleCategory from "../SingleCategory/SingleCategory";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";

export const generateStaticParams=async()=> {
  const res = await fetch("https://ird-back.vercel.app/api/categories")
  const categories=await res.json()
 
  return categories.slice(0,2)
}

const CategoryLists = async () => {
  const data = await getDuas();

  return (
    <ScrollArea>
      <Accordion type="single" collapsible className="w-[430px] h-[836px]">
        {data?.map((item: DuaCategory) => {
          return (
            <AccordionItem
              key={item.category_id}
              value={item.category_id.toString()}
              className="my-4 bg-[#E8F0F5]  rounded-lg"
            >
              {/* category Head */}

              {/* accordian trigger */}
              <SingleCategory item={item} />

              {/* sub category list */}
              <AccordionContent>
                <div className="space-y-1 bg-white px-4 py-4">
                  {item.subcategories.map((subcategory) => (
                    <SubCategoryButton sub={subcategory}  key={subcategory.subcategory_id}/>
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
