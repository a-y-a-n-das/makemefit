import { authOptions } from "@api/auth/[...nextauth]/route";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
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
    const workout = await prisma.workout.findUnique({
      where: {
        id: body.workoutId,
      },
    });

    if (!workout) {
      return new Response("Workout not found", { status: 404 });
    }

    const workoutSession = await prisma.workoutSession.create({
      data: {
        userId: session?.user?.id || undefined,
        workoutId: workout.id,
        startedAt: new Date(),
      },
    });
    return new Response(JSON.stringify({ message: "Workout started successfully", workoutSession }), { status: 200 });
  } catch (error) {
    console.error("Error starting workout:", error);
    return new Response("Failed to start workout", { status: 500 });
  }
}
