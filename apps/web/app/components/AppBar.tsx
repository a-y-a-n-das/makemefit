"use client";
import { Dumbbell } from "lucide-react";

export default function AppBar() {
  return (
    <nav className="bg-white shadow-md h-18">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        <div className="w-full flex justify-between">
          <div className="flex items-center lg:ml-16">
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
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>

            <div className="flex font-semibold ml-2 text-xl text-gray-900 ml-8 items-center ">
                Dashboard
            </div>

          </div>
          <div>
            {/* Search Bar*/}
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:inline-flex rounded-full border border-gray-300 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent lg:w-164"
            />
          </div>
        <div>
          {/* User Profile */}
          <div className="flex items-center hover:text-purple-800">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
          </svg>
            </div>
            </div>
        </div>
      </div>
    </nav>
  );
}
