export type DuaCategory = {
    _id: string;
    category_id: number;
    category_name_bn: string;
    category_name_en: string;
    subcategories: Subcategory[];
  };
  
  export  type Subcategory = {
    subcategory_id: number;
    subcategory_name_bn: string;
    subcategory_name_en: string;
    duas: Dua[];
  };
  
  export  type Dua = {
    dua_id: number;
    dua_name_bn: string;
    dua_name_en: string;
    dua_arabic: string | null;
    translation_bn: string | null;
    translation_en: string | null;
  };
  export  type DuaBrowserProps= {
    categories: DuaCategory[]
  }