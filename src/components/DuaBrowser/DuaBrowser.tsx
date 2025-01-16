"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

import { DuaBrowserProps } from "@/types/types";
import { useAppSelector } from "@/redux/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import icon from "../../assets/dua/allah_icon.png";
import Image from "next/image";
import { useEffect } from "react";

export function DuaBrowser({ categories }: DuaBrowserProps) {
  const { categoryId:categoryIid } = useAppSelector((state) => state.category);
  const { subCategoryId } = useAppSelector((state) => state.category);
  const data = categories.find(
    (category) => category.category_id === categoryIid
  );

  useEffect(() => {
    // Trigger scrolling whenever subCategoryId changes
    if (subCategoryId) {
      const element = document.getElementById(subCategoryId.toString());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [subCategoryId]);

  return (
    <div>
      {/* Duas Section */}

      <ScrollArea className="h-dvh ">
        <div className="space-y-2 p-4">
          {data?.subcategories?.map((subcategory) => (
            <div key={subcategory.subcategory_id}>
              {/* Render category name */}

              {/* Render subcategory name */}
              <div
                id={subcategory.subcategory_id.toString()}
                className="py-5 rounded-lg bg-white shadow-sm px-8"
              >
                <h2>
                  <span className="text-green-600 mr-2 font-semibold">
                    Section:
                  </span>
                  {subcategory.subcategory_name_en}
                </h2>
              </div>

              {/* Render Duas */}
              {subcategory.duas.map((dua) => (
                <Card key={dua.dua_id} className="my-2 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-green-600 mb-2 flex justify-start items-center space-x-2">
                      <section>
                        <Image width={35} height={35} src={icon} alt="icon" />
                      </section>
                      <h1>
                        {dua.dua_id}. {dua.dua_name_en}
                      </h1>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl text-right mb-4 font-arabic">
                      {dua.dua_arabic}
                    </p>
                  </CardContent>
                  <CardContent>
                    <p className="text-muted-foreground text-start">
                      <span className="font-semibold text-black">
                        Translation English:{" "}
                      </span>
                      {dua.translation_en}
                    </p>
                  </CardContent>
                  <CardContent>
                    <p className="text-muted-foreground text-start">
                      <span className="font-semibold text-black">
                        Translation Bangla:{" "}
                      </span>
                      {dua.translation_bn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
    // </div>
  );
}
