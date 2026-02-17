"use client";
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

export default function SpecificWorkoutChart(props: { data: any[] }) {

    const Cycling = "./cycling.svg";
  const data = [
    { name: "", Running: null },
    { name: "Jan", Running: 3 },
    { name: "Feb", Running: 4 },
    { name: "Mar", Running: 2 },
    { name: "Apr", Running: 5 },
    { name: "May", Running: 3 },
    { name: "Jun", Running: 6 },
    { name: "Jul", Running: 4 },
    { name: "", Running: null },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className=" flex items-center gap-3">

        <div className="rounded-xl p-2.5 bg-[#3057e6] ">
            <Image src={Cycling} alt="Cycling Logo" width={32} height={32} className="invert" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Running</h2>
        <p className="text-gray-600 font-medium">
            It never gets easier, you just get faster. 
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
              fill="#90a5f3"
              dataKey="Running"
              stroke="#3057e6"
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 8 }}
              animationDuration={1600}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
