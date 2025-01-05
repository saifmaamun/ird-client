"use client"

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import Image from 'next/image';


// dummy data

interface SubCategory {
    title: string
    isActive?: boolean
  }
  
  interface Category {
    title: string
    count: number
    subcategory: string
    image?: string
    subcategories?: SubCategory[]
  }
  
  const categories: Category[] = [
    {
      title: "Introduction to Dua",
      count: 15,
      subcategory: "Subcategory: II",
      image: "/placeholder.svg",
      subcategories: [
        { title: "What is Dua", isActive: true },
        { title: "Conditions for Dua to be successful" },
        { title: "The Methode Of Dua" },
        { title: "Before Dua" },
        { title: "During Dua" },
        { title: "Prerequisites of writing Dua and drinking it's water" },
        { title: "The correct way to perform Dua for a small child" },
      ],
    },
    {
      title: "Introduction to Dua",
      count: 15,
      subcategory: "Subcategory: II",
      image: "/placeholder.svg",
    },
    {
      title: "Introduction to Dua",
      count: 15,
      subcategory: "Subcategory: II",
      image: "/placeholder.svg",
    },
  ]
  


const Categories = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isOpen, setIsOpen] = useState(true)

    return (
      <div className={`border-r bg-background ${isOpen ? "w-[320px]" : "w-0"} transition-all duration-300 hidden md:block`}>
        <div className="p-4 space-y-4">
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
            Categories
          </Button>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by Categories"
              className="pl-8"
            />
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-4">
              {categories.map((category, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-start gap-2 p-2 hover:bg-muted rounded-lg">
                    <Image
                      src="/"
                      width={40}
                      height={40}
                      alt={category.title}
                      className="h-10 w-10 rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.subcategory}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {category.count} Duas
                    </span>
                  </div>
                  {category.subcategories && (
                    <div className="ml-6 space-y-2 relative">
                      <div className="absolute left-2 top-0 bottom-0 w-px bg-emerald-500" />
                      {category.subcategories.map((sub, j) => (
                        <div key={j} className="relative pl-6">
                          <div className="absolute left-[7px] top-[13px] w-3 h-px bg-emerald-500" />
                          <div
                            className={`absolute left-1 top-2.5 w-3 h-3 rounded-full border-2 ${
                              sub.isActive
                                ? "bg-emerald-500 border-emerald-500"
                                : "bg-background border-emerald-500"
                            }`}
                          />
                          <Button
                            variant="ghost"
                            className={`w-full justify-start ${
                              sub.isActive ? "text-emerald-500" : ""
                            }`}
                          >
                            {sub.title}
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    )
  }
  

export default Categories;