import prisma from "@/service/PrismaClient";
import { ExpenseService } from "@/service/expenseService";

function expenseServiceFactory() {
    const expenseService = new ExpenseService(prisma);
    return { expenseService };
}
export default expenseServiceFactory;
