import { Expense } from "@prisma/client";

export function createExpenseArray(amountInTheArray: number) {
    const expenses: Expense[] = Array(amountInTheArray)
        .fill({
            id: 0,
            name: "A",
            price: 2,
            description: "V",
            date: new Date(),
            createdAt: new Date(),
            userId: 1,
        })
        .map((value) => ({ ...value, id: value.id++ }));
    return expenses;
}
