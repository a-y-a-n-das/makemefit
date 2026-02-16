import type { Metadata } from "next";
import AppBar from "../components/AppBar";

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
    <>
    <AppBar />
    <main>{children}</main>
    </>
  );
}
