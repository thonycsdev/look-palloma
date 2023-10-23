import { Expense } from "@prisma/client";
import axios from "axios";

function expenseService() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    async function getAllExpenses() {
        const response = await axios.get(`${apiUrl}api/expense`);
        return response.data;
    }

    async function createExpense(expense: Expense) {
        const result = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}api/expense`,
            expense
        );
        return result.status;
    }

    async function removeExpense(expenseId: number) {
        const result = await axios.delete(`${apiUrl}api/expense/${expenseId}`);
        return result.status;
    }

    return { getAllExpenses, createExpense, removeExpense };
}

export default expenseService;
