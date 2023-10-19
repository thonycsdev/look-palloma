import { Expense, PrismaClient } from "@prisma/client";

export class ExpenseRepository {
    constructor(private prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async createExpense(expense: Expense): Promise<Expense> {
        return this.prisma.expense.create({
            data: expense,
        });
    }
    async getAllExpenses(): Promise<Expense[]> {
        return this.prisma.expense.findMany();
    }
    async getExpense(id: number) {
        const expense = this.prisma.expense.findUnique({
            where: {
                id: id,
            },
        });

        if (!expense) throw new Error(`Expense ${id} not found`);
        return expense!;
    }
    // async updateExpense(id: number, expense: Expense): Promise<Expense> {

    // }
    async deleteExpense(id: number): Promise<Expense> {
        return this.prisma.expense.delete({
            where: {
                id: id,
            },
        });
    }
}
