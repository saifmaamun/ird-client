'use client'

import { useState } from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dua, DuaCategory, Subcategory } from '@/types/types'

interface DuaBrowserProps {
  categories: DuaCategory[]
}

export function DuaBrowser({ categories }: DuaBrowserProps) {
  // const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  // const [selectedSubcategory, setSelectedSubcategory] = useState<number | null>(null)
  const [selectedDuas, setSelectedDuas] = useState<Dua[]>([])

  // const handleSubcategoryClick = (subcategory: Subcategory) => {
  //   setSelectedSubcategory(subcategory.subcategory_id)
  //   setSelectedDuas(subcategory.duas)
  // }


  return (
    <div>
     {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
      {/* Categories Section */}
      {/* <div className="md:col-span-1 border rounded-lg">
        <ScrollArea className="h-[600px]">
          <Accordion type="single" collapsible>
            {categories.map((category) => (
              <AccordionItem key={category.category_id} value={category.category_id.toString()}>
                <AccordionTrigger className="px-4">
                  
                  {category.category_name_en}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-1 px-4 pb-4">
                    {category.subcategories.map((subcategory) => (
                      <Button
                        key={subcategory.subcategory_id}
                        variant={selectedSubcategory === subcategory.subcategory_id ? "secondary" : "ghost"}
                        className="w-full justify-start text-left"
                        onClick={() => handleSubcategoryClick(subcategory)}
                      >
                        {subcategory.subcategory_name_en}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </div> */}

      {/* Duas Section */}
      {/* <div className="md:col-span-2"> */}
        <ScrollArea className="h-[600px]">
          <div className="space-y-4 p-4">
            {selectedDuas.map((dua) => (
              <Card key={dua.dua_id} className="p-4">
                {dua.dua_name_en && (
                  <h3 className="font-semibold mb-2">{dua.dua_name_en}</h3>
                )}
                {dua.dua_arabic && (
                  <p className="text-2xl text-right mb-4 font-arabic">{dua.dua_arabic}</p>
                )}
                {dua.translation_en && (
                  <p className="text-muted-foreground">{dua.translation_en}</p>
                )}
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    // </div>
  )
}

