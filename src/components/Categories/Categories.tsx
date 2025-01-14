


import { Search } from "lucide-react";
import { Input } from "../ui/input";
import CategoryLists from "../CategoryLists/CategoryLists";







const Categories = () => {
 

  return (
   
    <div
      className={`border-r rounded-lg bg-[#1FA45B] transition-all duration-300 hidden xl:block`}
    >
      <div className="py-4">
        <h1 className="text-lg text-white font-semibold text-center">
          Categories
        </h1>
      </div>
      <div className="p-4 bg-white space-y-4">
        {/* search */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by Categories" className="pl-8 py-4" />
        </div>
        {/* category lists */}
        <CategoryLists/>
        
      </div>
    </div>
  );
};

export default Categories;
