import { authOptions } from "@api/auth/[...nextauth]/route";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";

export default async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  try {
    const user = prisma.user.findUnique({
      where: {
        email: session?.user?.id || undefined,
      },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }
    
    const workoutSessions = await prisma.workoutSession.findMany({
        where: {
            userId: session?.user?.id || undefined,
            completedAt: null,
        },
        include: {
            workout: true,
        },
    });

    if (!workoutSessions || workoutSessions.length === 0) {
      return new Response("Workout session not found", { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Active workout sessions retrieved successfully", data: workoutSessions }), { status: 200 });

} catch (error) {
    console.error("Error retrieving active workout sessions:", error);
    return new Response("Failed to retrieve active workout sessions", { status: 500 });
  }
}
