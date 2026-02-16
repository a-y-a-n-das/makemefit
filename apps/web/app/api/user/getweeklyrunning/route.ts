import { authOptions } from "@api/auth/[...nextauth]/route";
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";



export default async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    try {
        const user = await prisma.user.findUnique({
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
                completedAt: {
                    not: null,
                },
                workout: {
                    name: "Running",
                },
            },
            include: {
                workout: true,
            },
        });

        const date = new Date();
        const day = date.getDay();

        const isoDay = day === 0 ? 7 : day; 

        date.setDate(date.getDate() - isoDay + 1);
        date.setHours(0, 0, 0, 0);
        const current_week_start = date

        const weeklyRunningSessions = workoutSessions.filter(session => {
            if (!session.completedAt) return false;
            const completedDate = new Date(session.completedAt);
            return completedDate >= current_week_start;
        }

        );

        return new Response(JSON.stringify({ message: "Weekly running sessions retrieved successfully", data: weeklyRunningSessions }), { status: 200 });
    } catch (error) {
        console.error("Error retrieving weekly running sessions:", error);
        return new Response("Failed to retrieve weekly running sessions", { status: 500 });
    }
}