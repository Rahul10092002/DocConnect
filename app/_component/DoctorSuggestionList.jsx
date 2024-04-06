"use client";
import GlobalApi from "@/utils/GlobalApi";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function DoctorSuggestionList() {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((resp) => {
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    });
  };
  return (
    <div className="p-4 border-[1px] mt-5 md:ml-5 w-full">
      {doctorList.map((doctor, index) => (
        <Link className="w-full" href={"/details/" + doctor?.id}>
          <div
            key={index}
            className="mb-4 p-3 shadow-sm w-full cursor-pointer hover:bg-slate-100 rounded-lg flex items-center gap-3"
          >
            <Image
              src={doctor?.attributes?.image?.data?.attributes?.url}
              alt="Doctor's Profile"
              width={70}
              height={70}
              className="w-[70px] h-[70px] rounded-full object-cover"
            />
            <div className="mt-3 flex flex-col gap-1">
              <h2 className="text-[10px] bg-blue-100 p-1 rounded px-2 text-primary">
                {doctor?.attributes?.categories?.data[0]?.attributes?.Name}
              </h2>
              <h2 className="font-medium text-sm">
                {doctor?.attributes?.Name}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DoctorSuggestionList;
