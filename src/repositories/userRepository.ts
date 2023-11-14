import { LoginCredentials, UserPayload } from "@/models/User";
import { PrismaClient } from "@prisma/client";

export function userRepository(prisma: PrismaClient) {
    async function createUser(payload: UserPayload) {
        console.log(payload);
        return await prisma.user.create({
            data: {
                name: payload.name,
                Credentials: {
                    create: {
                        email: payload.email,
                        password: payload.password,
                    },
                },
            },
        });
    }

    async function signInUser(credentials: LoginCredentials) {
        try {
            const credential = await prisma.credentials.findUniqueOrThrow({
                where: {
                    email: credentials.email,
                },
                select: {
                    password: true,
                    email: true,
                    user: true,
                },
            });
            if (credentials.password === credential.password)
                return credential.user;
            throw new Error("Invalid credentials");
        } catch (error) {
            throw new Error("Invalid credentials on Request");
        }
    }

    return { createUser, signInUser };
}
