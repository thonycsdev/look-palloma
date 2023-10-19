import { Expense } from "@prisma/client";

export function serializeDateType(response: Expense[]) {
    const expenses = response.map((expense) => ({
        ...expense,
        date: expense.date.toLocaleDateString(),
        createdAt: expense.createdAt.toLocaleDateString(),
    }));

    return expenses;
}
