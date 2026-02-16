"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Dumbbell, Mail, Lock, ArrowRight, UserPlus } from "lucide-react";


export default  function SignupForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);

        const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (res?.ok) {
            const data = await res.json();
            console.log("User created:", data);

            await signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: "/dashboard",
            });

        } else {
            setIsLoading(false);
            alert("Invalid credentials");
        }
    }

    return (
    <div className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gray-900">makeme</span>
              <span className="text-purple-600">fit</span>
            </span>
          </div>
        </div>

        {/* Signup Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-purple-100 p-3">
                <UserPlus className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-600">Start your fitness journey today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 text-gray-900 transition-all focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 text-gray-900 transition-all focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="••••••••"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">Must be at least 8 characters long</p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-4 text-lg font-semibold text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
              {!isLoading && <ArrowRight className="h-5 w-5" />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="font-semibold text-purple-600 hover:text-purple-700">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
