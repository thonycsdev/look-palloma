import { expenseRepositoryFactory } from "@/factories/expenseRepositoryFactory";
import { Expense } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getExpenses(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { repository } = expenseRepositoryFactory();
    if (req.method === "POST") {
        const expense = (await req.body) as Expense;
        const result = await repository.createExpense(expense);
        res.json(result);
        return;
    }
    if (req.method === "DELETE") {
        const { expenseId } = req.query;
        await repository.deleteExpense(+expenseId!);
    }
    const expenses = await repository.getAllExpenses();
    res.json(expenses);
}
