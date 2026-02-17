"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

export default function WorkoutsChart(props: {data: any[]}) {
    const { data } = props;

  return <div className="bg-white rounded-2xl shadow-sm p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Number of Workouts
          </h2>
         
        </div>

        <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl text-sm">
          Running
        </button>
      </div>

      {/* Chart */}
      <div className="w-full h-80 ">
        <ResponsiveContainer width="100%" height="100%"  >
          <LineChart data={data} margin={{ top: 5, right: 10, left: 5, bottom: 10 }} >
            <CartesianGrid strokeDasharray="3 3" vertical={false}  />
            <XAxis dataKey="name" axisLine={false} tickLine={false}  />
            <YAxis  axisLine={false} tickLine={false} width={25} />
            <Tooltip contentStyle={{borderRadius: "6px"}} />
            <Line
              type="monotone"
              dataKey="Running"
              stroke="#0b2a97"
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 8 }}
              animationDuration={1600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
}
