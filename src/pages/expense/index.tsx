import HomePage from "@/components/Home/HomePage";
import React, { useContext, useState } from "react";
import { getExpenses } from "../../../__mockData__/expensesUsers";
import Button from "@/components/Buttons/Button";
import { ExpenseContext } from "@/contexts/expenseContext";
import CreateExpenseModal from "@/components/Modals/CreateExpenseModal";
import { Expense } from "@/models/Expense";

function ExpensePage() {
    const expenses = getExpenses();
    const [isOpen, setIsOpen] = useState(false);
    const { createExpense } = useContext(ExpenseContext);
    const handleCreateExpense = () => {
        setIsOpen(true);
        createExpense({} as Expense);
    };
    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            <CreateExpenseModal isOpen={isOpen} onClose={onClose} />
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
