'use client'
import { Subcategory } from '@/types/types';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/redux/hooks';
import { setSubCategoryId } from '@/redux/features/categories/categorySlice';

const SubCategoryButton = ({sub}:{sub:Subcategory}) => {
    const dispatch =useAppDispatch()
    const handleSubCategoryId=(id:number)=>{
dispatch(setSubCategoryId(id))
    }
    return (
        <div>
            <Button
                   
                      variant="ghost"
                      className="w-full justify-start text-left"
                      onClick={()=>handleSubCategoryId(sub.subcategory_id)}
                    >
                      {sub.subcategory_name_en}
                    </Button>
        </div>
    );
};

export default SubCategoryButton;