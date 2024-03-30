"use client";
import GlobalApi from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function CategoryList({}) {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();
  const category = params.split("/")[2];
//   console.log(category);
  useEffect(() => {
    getCategoryList();
    console.log(params);
  }, [params]);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };
  return (
    <div className="h-screen fixed flex flex-col mt-5">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList &&
              categoryList.map((item, index) => (
                <CommandItem key={item.id}>
                  <Link
                    href={"/search/" + item?.attributes?.Name}
                    className={`p-2 flex gap-2 text-[14px] text-blue-600 rounded-md cursor-pointer w-full 
                    ${category == item.attributes.Name && "bg-blue-300"}`}
                  >
                    <Image
                      src={item?.attributes?.Icon?.data?.attributes?.url}
                      alt="icon"
                      width={25}
                      height={25}
                      
                    />
                    <label className="text-black-600 text-sm">
                      {item.attributes.Name}
                    </label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
