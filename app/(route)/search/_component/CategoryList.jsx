"use client";
import GlobalApi from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react";
import { Command, CommandGroup, CommandList } from "@/components/ui/command";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

function CategoryList({}) {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();
  const category = params.split("/")[2];
 
  useEffect(() => {
    getCategoryList();
  }, [params]);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };
  return (
    <div className="h-screen flex flex-col mt-5">
      <Command>
        <CommandList className="overflow-visible">
          <CommandGroup heading="Categories">
            {categoryList &&
              categoryList.map((item, index) => (
                <div key={item.id}>
                  <Link
                    href={"/search/" + item.attributes.Name}
                    passHref={true}
                    key={index}
                    className={`p-2 flex gap-2 text-[14px] bg-blue-50 rounded-md cursor-pointer w-full 
                    ${category == item.attributes.Name && "bg-blue-300"}`}
                  >
                    <Image
                      src={item.attributes?.Icon?.data?.attributes?.url}
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <label className="text-blue-600 text-sm">
                      {item?.attributes?.Name}
                    </label>
                  </Link>
                </div>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
