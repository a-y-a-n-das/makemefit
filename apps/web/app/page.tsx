import styles from "./page.module.css";
import { prisma } from "@repo/db";



export default async function Home() {

  const user = await prisma.user.findFirst() 
  
  console.log(user) 
  
  
  return (


    <div className={styles.page}>
      {user?.name ?? "No user added yet"}
    </div>
  );
}