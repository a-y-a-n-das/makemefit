import LogoutButton from "../components/LogoutButton";

export default function DashboardPage() {
  return <div className="w-full bg-[#f4f7f0]">
    <div className="flex justify-end mt-1">
    <LogoutButton />
    </div>
  </div>;
}