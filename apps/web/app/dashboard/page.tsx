import { getServerSession } from "next-auth";
import LogoutButton from "../components/LogoutButton";
import { authOptions } from "@api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
    if (!session) {
      redirect("/login");
    }



  return <div className="w-full bg-[#f4f7f0]">
    <div className="flex justify-end mt-1">
    <LogoutButton />
    </div>
  </div>;
}