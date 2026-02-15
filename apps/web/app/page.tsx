// import { prisma } from "@repo/db";
import Hero from "./components/Hero";



export default async function Home() {

  // const user = await prisma.user.findFirst() 
  
  // console.log(user) 
  
  
  return (


    <div >
      <Hero/>
    </div>
  );
}