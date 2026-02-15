import { prisma } from "@repo/db";
import bcrypt from "bcrypt";


export async function POST(req: Request) {
    const { email, password } = await req.json();

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        return new Response(JSON.stringify({ error: "User with this email already exists" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await prisma.user.create({
        data: {
            email,
            hashedPassword,
        },
    });

    return new Response(JSON.stringify({ message: "User created successfully", userId: user.id }), { status: 201 });
}   