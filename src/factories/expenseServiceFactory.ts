import prisma from "@/repositories/PrismaClient";
import { ExpenseRepository } from "@/repositories/expenseRepository";

function expenseServiceFactory() {
    const expenseService = new ExpenseRepository(prisma);
    return { expenseService };
}
export default expenseServiceFactory;
