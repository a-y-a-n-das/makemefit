import { prisma } from "@repo/db";
import bcrypt from "bcrypt";


export async function createUser(data:{
    name?: string;
    email: string;
    password: string;
}) {
    const existingUser = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });

    if (existingUser) {
        throw new Error("User with this email already exists");
    }
    const hashedPassword = await bcrypt.hash(data.password, 12);        
    const { name, email } = data;

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword: hashedPassword,
        },
    });

    return user;

}

export async function verifyUser(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        return null;
    }

    const isValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isValid) {
        return null;
    }

    return user;
}