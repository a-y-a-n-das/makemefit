"use client";
import { Dumbbell } from "lucide-react";




export default function AppBar() {
    return (
        <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-purple-600 to-pink-600 shadow-xl shadow-purple-500/30 transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40">
                <Dumbbell className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">
                <span className="text-gray-900">makeme</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">fit</span>
            </span>
            </div>

        </div>
        </nav>
    );
}