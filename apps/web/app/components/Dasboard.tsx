import { authOptions } from "@api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import DailyCard from "./DailyCard";
import WorkoutsChart from "./workoutsChart";
import SpecificWorkoutChart from "./SpecificWorkoutChart";



export default async function Dashboard() {

    const session = await getServerSession(authOptions);
      
     const data = [
    {name: "", Running: null },
    { name: "Mon", Running: 3 },
    { name: "Tue", Running: 4 },
    { name: "Wed", Running: 2 },
    { name: "Thu", Running: 5 },
    { name: "Fri", Running: 3 },
    { name: "Sat", Running: 6 },
    { name: "Sun", Running: 4 },
    { name: "", Running: null },
  ];
        
  return <div className="w-full p-4 space-y-6">
    {/* Daily Cards Section */}
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
      <DailyCard km={10} type="running"/>
      <DailyCard km={15} type="cycling"/>
    </div>

    {/* Main Workouts Chart */}
    <div className="w-full">
      <WorkoutsChart data={data}/>
    </div>

    {/* Specific Workout Charts Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SpecificWorkoutChart data={data}/>
      <SpecificWorkoutChart data={data}/>
      <SpecificWorkoutChart data={data}/>
    </div>
  </div>;
}