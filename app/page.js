"use client";
import Image from "next/image";
import Hero from "./_component/Hero";
import CategorySearch from "./_component/CategorySearch";
import DoctorList from "./_component/DoctorList";
import GlobalApi from "@/utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div>
      <Hero />

      <CategorySearch />
      <DoctorList doctorList={doctorList } />
    </div>
  );
}
