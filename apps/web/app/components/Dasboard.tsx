import { authOptions } from "@api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import DailyCard from "./DailyCard";



export default async function Dashboard() {

    const session = await getServerSession(authOptions);
      
        
  return <div >
    <div className="m-20">

    <DailyCard km={5} type="running"/>
    </div>
  </div>;
}