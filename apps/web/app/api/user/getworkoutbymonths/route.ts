import { authOptions } from "@api/auth/[...nextauth]/route";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";

export default async function GET(request: Request) {
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
    const workoutSessions = await prisma.workoutSession.findMany({
      where: {
        userId: session?.user?.id || undefined,
        workout: {
            category: body.category || undefined,
        },
        completedAt: {
          not: null,
        },
      },
      include: {
        workout: true,
      },
    });

    type MonthlyCount = Record<string, number>;

    const monthlyCounts: MonthlyCount = workoutSessions.reduce(
      (acc, session) => {
        if (!session.completedAt) return acc;

        const date = new Date(session.completedAt);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");

        const key = `${year}-${month}`;

        acc[key] = (acc[key] || 0) + 1;

        return acc;
      },
      {} as MonthlyCount,
    );

    const monthlyArray = Object.entries(monthlyCounts)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([month, count]) => ({
    month,
    count,
  }));


    return new Response(JSON.stringify({ message: "Workout sessions fetched successfully", data: monthlyArray }), { status: 200 });

  } catch (error) {
    console.error("Error fetching workout sessions:", error);
    return new Response("Failed to fetch workout sessions", { status: 500 });
  }
}
