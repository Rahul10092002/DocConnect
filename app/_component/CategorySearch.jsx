"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlobalApi from "@/utils/GlobalApi";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function CategorySearch() {
  const [CategoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };
  // console.log(CategoryList);
  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-4 ">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray text-xl">
        Search Your Doctor and Book Appointment
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Search...." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      <div>
        {/* Display category */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {CategoryList.length > 0
            ? CategoryList.map(
                (item, index) =>
                  index < 6 && (
                    <Link href={"/search/"+item.attributes.Name}
                      key={item.id}
                      className="flex flex-col text-center gap-2 items-center p-5 m-2 rounded-lg bg-blue-50 hover:scale-110 transition-all ease-in-out mt-5"
                    >
                      <Image
                        src={item?.attributes?.Icon?.data?.attributes?.url}
                        alt="icon"
                        width={40}
                        height={40}
                      />
                      <label className="text-blue-600 text-sm">
                        {item?.attributes?.Name}
                      </label>
                    </Link>
                  )
              )
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div className="h-[120px] m-2 w-[100px]  bg-slate-200 animate-pulse rounded-lg "></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySearch;
