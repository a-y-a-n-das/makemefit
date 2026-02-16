import { authOptions } from "@api/auth/[...nextauth]/route";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";

export default async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  try {
    const body = await request.json();

    const user = prisma.user.findUnique({
      where: {
        email: session?.user?.id || undefined,
      },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    
    
    const workoutSession = await prisma.workoutSession.findUnique({
        where: {
            id: body.workoutSessionId,
        },
        include: {
            workout: true,
        },
    });

    if (!workoutSession) {
      return new Response("Workout session not found", { status: 404 });
    }

    const burningRate = workoutSession.workout.burningRate
    const competedAtDate = new Date();

    const duration = workoutSession.completedAt ? (competedAtDate.getTime() - workoutSession.startedAt.getTime()) / 60000 : (new Date().getTime() - workoutSession.startedAt.getTime()) / 60000;
    const caloriesBurned = Math.round(burningRate * duration);   
    await prisma.workoutSession.update({
        where: {
            id: body.workoutSessionId,
        },
        data: {
            completedAt: competedAtDate,
            caloriesBurned: caloriesBurned,
        },
    }); 

    return new Response(JSON.stringify({ message: "Workout ended successfully", workoutSession }), { status: 200 });
  } catch (error) {
    console.error("Error ending workout:", error);
    return new Response("Failed to end workout", { status: 500 });
  }
}
