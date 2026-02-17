import { authOptions } from "@api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import DailyCard from "./DailyCard";
import WorkoutsChart from "./workoutsChart";
import SpecificWorkoutChart from "./SpecificWorkoutChart";



export default async function Dashboard() {

    const session = await getServerSession(authOptions);
      
     const data = [
    {name: "", Running: null, type: "swimming"},
    { name: "Mon", Running: 3 },
    { name: "Tue", Running: 4 },
    { name: "Wed", Running: 2 },
    { name: "Thu", Running: 5 },
    { name: "Fri", Running: 3 },
    { name: "Sat", Running: 6 },
    { name: "Sun", Running: 4 },
    { name: "", Running: null },
  ];
        
  return <div className="w-full h-full p-4 space-y-6">
    {/* Daily Cards Section */}
    <div className="flex flex-col md:flex-row gap-4">

    <div className="flex flex-col md:max-w-[27.5rem] md:flex-row gap-4 lg:max-w-none lg:w-[50rem] pr-3">
      <div className="flex flex-col gap-4 flex-1">
      <DailyCard km={1} type="running" />
      <DailyCard km={12} type="running"/>
      </div>
      <div className="flex flex-col gap-4 flex-1">
      <DailyCard km={20} type="cycling"/>
      <DailyCard km={15} type="cycling"/>
      </div>
    </div>

    {/* Main Workouts Chart */}
    <div className="w-full md:flex-1 min-w-0">
      <WorkoutsChart data={data} height="10" />
    </div>
    </div>

    {/* Specific Workout Charts Grid */}
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-3">
      <SpecificWorkoutChart data={data}/>
      <SpecificWorkoutChart data={data}/>
      <SpecificWorkoutChart data={data}/>
    </div>
  </div>;
}