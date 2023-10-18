import HomePage from "@/components/Home/HomePage";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/components/Buttons/Button";
import { ExpenseContext } from "@/contexts/expenseContext";
import CreateExpenseModal from "@/components/Modals/CreateExpenseModal";
import { Expense } from "@/models/Expense";

type ExpensePageProps = {
    expenses: Expense[];
};

function ExpensePage({ expenses }: ExpensePageProps) {
    const { createExpense, setExpenses } = useContext(ExpenseContext);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setExpenses(expenses);
    }, []);
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

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/expense");
    const expenses = await response.json();
    return {
        props: { expenses },
    };
}
export default ExpensePage;
