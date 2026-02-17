"use client";

import { log } from "console";
import Image from "next/image";

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

interface ChartProps {
  fill: string;
  stroke: string;
}

export default function SpecificWorkoutChart(props: { data: any[] }) {

  let logo: string;
  let title: string;
  let subTitle: string;
  let logoProperties: string;
  let chartProperties: ChartProps;

  switch(props.data[0].type) {
    case "running":
      logo = "./running.svg";
      title = "Running";
      subTitle = "It never gets easier, you just get faster";
      logoProperties = "bg-[#3057e6]";
      chartProperties = { fill: "#90a5f3", stroke: "#3057e6" };
        break;    
      case "cycling":
        logo = "./cycling.svg";
        title = "Cycling";
        subTitle = "The best way to burn calories is to cycle";
        logoProperties = "bg-[#f59e0b]";
        chartProperties = { fill: "#f5c05b", stroke: "#f59e0b" };
        break;
      case "swimming":
        logo = "./swimming.svg";
        title = "Swimming";
        subTitle = "The fastest way to get fit is to swim";
        logoProperties = "bg-[#ff458d]";
        chartProperties = { fill: "#ff4e92", stroke: "#f51b6f" };
        break;
    default:
      logo = "./running.svg";
      title = "Running";
      subTitle = "It never gets easier, you just get faster";
      logoProperties = "bg-[#3057e6]";
      chartProperties = { fill: "#90a5f3", stroke: "#3057e6" };
  }





    const Cycling = "./cycling.svg";
  const {data} = props;



  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className=" flex items-center gap-3">

        <div className={`rounded-xl p-3 ${logoProperties}`}>
            <Image src={logo} alt="Activity Logo" width={32} height={32} className="invert" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 font-medium">
            {subTitle} 
        </p>
        </div>

        </div>
     
      </div>

      {/* Chart */}
      <div className="w-full h-64 ">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 10, left: 5, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} width={25} />
            <Tooltip contentStyle={{ borderRadius: "6px" }} />
            <Area
              type="monotone"
              dataKey="Running"
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 8 }}
              animationDuration={1600}
              fill={chartProperties.fill}
              stroke={chartProperties.stroke}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
