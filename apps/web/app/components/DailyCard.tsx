"use client";

import Image from "next/image";

export default function DailyCard(props: { km: number; type: string }) {
  const runningLogo = props.type === "running" ? "./running.svg" : "./cycling.svg";
  const progress = Math.min(props.km / 10, 1) * 100; // Assuming 10 km is the goal for 100%

  return (
    <div className="w-full bg-white rounded-lg shadow-md flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center text-center p-6 pb-3">

      <div className="bg-blue-200 rounded-full p-3 mb-4 border border-blue-400">
        <Image src={runningLogo} alt="Running Logo" width={32} height={32} />
      </div>
      <div className="flex flex-col text-xl font-semibold ">
        <div>
        {props.km} km 
        </div>
        <div className="text-gray-600 text-sm">
        Daily {props.type}
        </div>
      </div>
      </div>
      <div className="w-full flex justify-start">
      <div className={`h-1 bg-blue-600 rounded-b-full ${progress === 100 ? "bg-green-500" : "rounded-r-full"} pb-1.5 `} style={{width:`${progress}%`}}></div>
      </div>
    </div>
  );
}
