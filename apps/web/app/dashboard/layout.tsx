import type { Metadata } from "next";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";

export const metadata: Metadata = {
  title: "Dashboard - makemefit",
  description: "Your Personal Fitness Companion - Track your workouts, monitor your progress, and stay on top of your fitness goals with our intuitive fitness dashboard. Everything you need in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AppBar />
        <main className="flex-1 bg-[#f4f7f0] overflow-auto">{children}</main>
      </div>
    </div>
  );
}
