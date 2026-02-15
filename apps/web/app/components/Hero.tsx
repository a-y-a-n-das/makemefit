"use client"; 

import { Activity, ArrowRight, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[20%] top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-300/40 blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-[400px] w-[400px] animate-pulse rounded-full bg-pink-300/40 blur-3xl animation-delay-2000" />
        <div className="absolute bottom-0 left-[40%] h-[300px] w-[300px] animate-pulse rounded-full bg-yellow-300/40 blur-3xl animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Navigation */}
        <nav className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-purple-600 to-pink-600 shadow-xl shadow-purple-500/30 transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gray-900">makeme</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">fit</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden font-medium text-gray-600 transition-colors hover:text-purple-600 sm:inline-flex">
              Features
            </button>
            <button className="hidden font-medium text-gray-600 transition-colors hover:text-purple-600 sm:inline-flex">
              Pricing
            </button>
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-2.5 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40" onClick={()=>{window.location.href="/login"}}>
              Login
            </button>
          </div>
        </nav>

        {/* Hero content - centered */}
        <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-2.5 shadow-md backdrop-blur-sm transition-transform hover:scale-105">
              <Activity className="h-4 w-4 animate-pulse text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Your Personal Fitness Companion</span>
            </div>
            
            <h1 className="mb-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
              Your Fitness Journey{" "}
              <span className="relative inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Made Simple
              </span>
            </h1>
            
            <p className="mb-12 text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Track your workouts, monitor your progress, and stay on top of your fitness goals 
              with our intuitive fitness dashboard. Everything you need in one place.
            </p>
            
            <div className="mb-20 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-purple-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-800 shadow-lg transition-all hover:scale-105 hover:border-purple-300 hover:bg-gray-50 hover:shadow-xl">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              <div className="group transition-transform hover:scale-110">
                <div className="mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent">50K+</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">Active Users</div>
              </div>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="group transition-transform hover:scale-110">
                <div className="mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent">1M+</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">Workouts Tracked</div>
              </div>
              <div className="h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="group transition-transform hover:scale-110">
                <div className="mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent">4.9</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-gray-500">App Rating</div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
