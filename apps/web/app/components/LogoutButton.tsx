"use client";
import { signOut, useSession } from "next-auth/react";

export default function LogoutButton() {
  const { data: session } = useSession();
  if (!session) {
    return null;
  }

  async function handleLogout() {
    await signOut({ callbackUrl: "/" });
  }

  return <button onClick={handleLogout}>Logout</button>;
}
