import expenseServiceFactory from "@/factories/expenseServiceFactory";
import { Expense } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getExpenses(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const expense = (await req.body) as Expense;
        const { expenseService } = expenseServiceFactory();
        const result = await expenseService.createExpense(expense);
        res.json(result);
        return;
    }
    const { expenseService } = expenseServiceFactory();
    const expenses = await expenseService.getAllExpenses();
    res.json(expenses);
}
