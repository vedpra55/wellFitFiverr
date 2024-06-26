import { getCurrentUser, getWellbeingData } from "@/utils/apiCalls";
import React from "react";
import WellbeingContainer from "./wellbeingContainer";
import Navbar from "@/components/UI/Navbar";
import WellbeingTable from "./wellbeingTable";

const Wellbeing = async () => {
  const user = await getCurrentUser();

  if (!user) return null;
  const getMoodColor = (mood) => {
    switch (mood) {
      case "Happy":
        return "bg-green-500";
      case "Sad":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };
  return (
    <div className="bg-black1">
      <div className="cont px-4 md:px-0">
        <Navbar user={user} />
        <h1 className="  text-white text-3xl font-medium mt-10 mb-5">
          Wellbeing
        </h1>
        <div className="grid grid-cols-12 pb-20 gap-y-5 gap-x-3">
          <WellbeingContainer user={user} />
          <WellbeingTable user={user} />
        </div>
        <div className="mt pb-20">
          <p className="text-white text-2xl font-medium"> Meditation guides</p>
        </div>
      </div>
    </div>
  );
};

export default Wellbeing;
