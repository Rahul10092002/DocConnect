"use client";
import DoctorList from "@/app/_component/DoctorList";
import GlobalApi from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react";

function Search({ params }) {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = () => {
    GlobalApi.getDoctorByCategory(params.cname).then((resp) => {
      // console.log(resp.data.data);
      setDoctorList(resp.data.data);
    });
  };
  return (
    <div className="mt-5">
      <DoctorList
        doctorList={doctorList}
        heading={params.cname}
        categorygrid="lg:grid-cols-3"
      />
    </div>
  );
}

export default Search;
