import expenseServiceFactory from "@/factories/expenseServiceFactory";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getExpenses(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { expenseService } = expenseServiceFactory();
    const expenses = await expenseService.getAllExpenses();
    console.log(expenses);
    res.json(expenses);
}
