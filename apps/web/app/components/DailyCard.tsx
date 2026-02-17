"use client";

import Image from "next/image";

export default function DailyCard(props: { km: number; type: string }) {

  let logo: string;
  let cardProperties: string;
  let barColor: string;

  switch(props.type) {
    case "running":
      logo = "./running.svg";
      cardProperties = "bg-pink-200 border-pink-400";
      barColor = "bg-pink-500";
        break;    
      case "cycling":
        logo = "./cycling.svg";
        cardProperties = "bg-yellow-100 border-yellow-400";
        barColor = "bg-yellow-500";
        break;
    default:
      logo = "./running.svg";
      cardProperties = "bg-green-200 border-green-400";
      barColor = "bg-green-500";
  }
  
  
  
  const goal = (props.type === "running" ? 10 : 20); // Example goals: 10 km for running, 20 km for cycling
  const progress = Math.min(props.km / goal, 1) * 100; // Assuming 10 km is the goal for 100%

  return (
    <div className="w-full bg-white rounded-lg shadow-md flex flex-col justify-between mr-3 ml-3 h-35  ">
      <div className="flex items-center justify-start pt-10 pl-5 lg:pl-8 gap-4">

      <div className={`bg-blue-200 rounded-full p-3.5 border border-blue-400 ${cardProperties}`}>
        <Image src={logo} alt="Activity Logo" width={32} height={32} />
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
      <div className={`h-1 ${progress === 100 ? "bg-green-500" : barColor} rounded-b-full pb-1.5 `} style={{width:`${progress}%`}}></div>
      </div>
    </div>
  );
}
