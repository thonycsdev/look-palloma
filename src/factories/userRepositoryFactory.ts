import prisma from "@/repositories/PrismaClient";
import { userRepository } from "@/repositories/userRepository";

export function userRepositoryFactory() {
    const respository = userRepository(prisma);
    return { respository };
}
