// import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import BookAppointment from "./BookAppointment";

function DoctorDetails({ doctor }) {
  return (
    <>
      {/* doctor details */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg">
        {/* doctor image  */}
        <div>
          <Image
            src={doctor?.attributes?.image?.data?.attributes?.url}
            width={200}
            height={200}
            alt="doctor-image"
            className="h-[270px] w-full object-cover rounded-lg "
          />
        </div>
        {/* doctor imfo  */}
        <div className="col-span-2 mt-5 md:px-10 flex flex-col items-baseline gap-3">
          <h2 className="font-bold text-2xl ">{doctor?.attributes?.Name}</h2>
          <h2 className="flex gap-2 text-gray-500 text-md">
            <GraduationCap />
            <span>
              {doctor?.attributes?.Year_of_Experience} years of Experience
            </span>
          </h2>
          <h2 className="text-md flex gap-2 text-gray-500 ">
            <MapPin />
            <span>{doctor?.attributes?.Address}</span>
          </h2>
          <h2 className="text-[10px] bg-blue-100 p-1 rounded px-2 text-primary">
            {doctor?.attributes?.categories?.data[0]?.attributes?.Name}
          </h2>

          <BookAppointment doctor={doctor} />
        </div>
        {/* about doctor  */}
      </div>
      <div className="p-3 border-[1px] rounded-lg mt-5">
        <h2 className="font-bold text-[20px]">About Me</h2>
        <p className="text-gray-500 tracking-wide mt-2">
          {doctor?.attributes?.About}
        </p>
      </div>
    </>
  );
}

export default DoctorDetails;
