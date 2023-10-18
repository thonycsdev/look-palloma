import HomePage from "@/components/Home/HomePage";
import React, { useContext } from "react";
import { getExpenses } from "../../../__mockData__/expensesUsers";
import Button from "@/components/Buttons/Button";
import { ExpenseContext } from "@/contexts/expenseContext";

function ExpensePage() {
    const expenses = getExpenses();
    const { createExpense } = useContext(ExpenseContext);
    const handleCreateExpense = () => {
        createExpense({
            id: 1,
            name: "test",
            price: 10,
            date: new Date(),
            createdAt: new Date(),
            user: {
                id: 1,
                name: "test",
                email: "<EMAIL>",
            },
        });
    };
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <Button
                    className="self-end px-6 m-6"
                    onClick={handleCreateExpense}
                >
                    Add Expense
                </Button>
                <HomePage expenses={expenses} />
            </div>
        </>
    );
}

export default ExpensePage;
