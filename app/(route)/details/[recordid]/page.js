"use client";
import DoctorDetails from "@/app/_component/DoctorDetails";
import DoctorSuggestionList from "@/app/_component/DoctorSuggestionList";
import GlobalApi from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react";

function Details({ params }) {
  const [Doctor, setDoctor] = useState();
  useEffect(() => {
    getDoctorById();
  }, []);

  const getDoctorById = () => {
    GlobalApi.getDoctorDetails(params.recordid).then((res) => {
      // console.log(res);
      setDoctor(res.data.data);
    });
  };
  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px] ">Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* doctor details */}
        <div className="col-span-3">
          <DoctorDetails doctor={Doctor} />
        </div>
        {/* doctor suggestion */}
        <div className="col-span-1">
          <DoctorSuggestionList/>
        </div>
      </div>
    </div>
  );
}

export default Details;
