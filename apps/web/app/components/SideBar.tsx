"use client";

import { Dumbbell } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SideBar() {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [workoutStatsOpen, setWorkoutStatsOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const router = useRouter();

  const setButtonState = (button: string) => {
    if (button === "dashboard") {
      setDashboardOpen(true);
      setWorkoutStatsOpen(false);
      setScheduleOpen(false);
      router.push("/dashboard");
    } else if (button === "workoutStats") {
      setDashboardOpen(false);
      setWorkoutStatsOpen(true);
      setScheduleOpen(false);
      router.push("/dashboard/workouts");
    } else if (button === "schedule") {
      setDashboardOpen(false);
      setWorkoutStatsOpen(false);
      setScheduleOpen(true);
      router.push("/dashboard/schedule");
    }
  };
  return (
    <aside className=" hidden lg:flex lg:w-64 bg-white shadow-md flex-col">
      <div className="flex items-center gap-2 hidden lg:flex px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600">
          <Dumbbell className="h-5 w-5 text-white" />
        </div>
        <span className="text-2xl font-bold">
          <span className="text-gray-900">makeme</span>
          <span className="text-purple-600">fit</span>
        </span>
      </div>

      <nav className="flex flex-col gap-4 pl-6 mt-2">
        <button
          className={`flex items-center  font-semibold text-gray-700 hover:text-blue-600 p-3 ${dashboardOpen ? "!text-indigo-700 bg-blue-50 border-r-4 border-indigo-700 rounded-l-xl" : ""}`}
          onClick={() => setButtonState("dashboard")}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>
          </div>
          <div className="ml-4">Dashboard</div>
        </button>
        <button
          className={`flex items-center  font-semibold text-gray-700 hover:text-blue-600 p-3 ${workoutStatsOpen ? "!text-indigo-700 bg-blue-50 border-r-4 border-indigo-700 rounded-l-xl" : ""}`}
          onClick={() => setButtonState("workoutStats")}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              />
            </svg>
          </div>
          <div className="ml-4">Workout Statistic</div>
        </button>
        <button
          className={`flex items-center  font-semibold text-gray-700 hover:text-blue-600 p-3 ${scheduleOpen ? "!text-indigo-700 bg-blue-50 border-r-4 border-indigo-700 rounded-l-xl" : ""}`}
          onClick={() => setButtonState("schedule")}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </div>
          <div className="ml-4">Schedule</div>
        </button>
      </nav>
    </aside>
  );
}
