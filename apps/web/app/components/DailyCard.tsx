"use client";

import Image from "next/image";

export default function DailyCard(props: { km: number; type: string }) {
  const runningLogo = props.type === "running" ? "./running.svg" : "./cycling.svg";
  const goal = (props.type === "running" ? 10 : 20); // Example goals: 10 km for running, 20 km for cycling
  const progress = Math.min(props.km / goal, 1) * 100; // Assuming 10 km is the goal for 100%

  return (
    <div className="w-full bg-white rounded-lg shadow-md flex flex-col justify-between mr-3 ml-3 h-35  ">
      <div className="flex items-center justify-start pt-10 pl-8  gap-4">

      <div className="bg-blue-200 rounded-full p-3.5 border border-blue-400">
        <Image src={runningLogo} alt="Running Logo" width={32} height={32} />
      </div>
      <div className="flex flex-col gap-1 text-2xl font-semibold ">
        <div>
        {props.km} km 
        </div>
        <div className="text-gray-600 text-sm">
        Daily {props.type}
        </div>
      </div>
      </div>
      <div className="w-full flex justify-start ">
      <div className={`h-1 bg-blue-600 rounded-b-full ${progress === 100 ? "bg-green-500" : ""} pb-1.5 `} style={{width:`${progress}%`}}></div>
      </div>
    </div>
  );
}
