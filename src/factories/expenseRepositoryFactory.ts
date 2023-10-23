import prisma from "@/repositories/PrismaClient";
import { ExpenseRepository } from "@/repositories/expenseRepository";

export function expenseRepositoryFactory() {
    const repository = new ExpenseRepository(prisma);
    return { repository };
}
