"use client"; 

import { Activity, ArrowRight, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Navigation */}
        <nav className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gray-900">makeme</span>
              <span className="text-purple-600">fit</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden font-medium text-gray-600 hover:text-gray-900 sm:inline-flex">
              Features
            </button>
            <button className="hidden font-medium text-gray-600 hover:text-gray-900 sm:inline-flex">
              Pricing
            </button>
            <button className="rounded-full bg-purple-600 px-6 py-2.5 font-semibold text-white hover:bg-purple-700" onClick={()=>{window.location.href="/login"}}>
              Login
            </button>
          </div>
        </nav>

        {/* Hero content - centered */}
        <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-50 px-5 py-2.5">
              <Activity className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Your Personal Fitness Companion</span>
            </div>
            
            <h1 className="mb-8 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
              Your Fitness Journey{" "}
              <span className="text-purple-600">
                Made Simple
              </span>
            </h1>
            
            <p className="mb-12 text-xl leading-relaxed text-gray-600 lg:text-2xl">
              Track your workouts, monitor your progress, and stay on top of your fitness goals 
              with our intuitive fitness dashboard. Everything you need in one place.
            </p>
            
            <div className="mb-20 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white hover:bg-purple-700">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50">
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              <div>
                <div className="mb-1 text-5xl font-bold text-gray-900">50K+</div>
                <div className="text-sm font-medium text-gray-500">Active Users</div>
              </div>
              <div className="h-16 w-px bg-gray-200" />
              <div>
                <div className="mb-1 text-5xl font-bold text-gray-900">1M+</div>
                <div className="text-sm font-medium text-gray-500">Workouts Tracked</div>
              </div>
              <div className="h-16 w-px bg-gray-200" />
              <div>
                <div className="mb-1 text-5xl font-bold text-gray-900">4.9</div>
                <div className="text-sm font-medium text-gray-500">App Rating</div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
