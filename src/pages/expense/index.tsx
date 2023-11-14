import HomePage from "@/components/Home/HomePage";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/components/Buttons/Button";
import { ExpenseContext } from "@/contexts/expenseContext";
import CreateExpenseModal from "@/components/Modals/CreateExpenseModal";
import { Expense } from "@/models/Expense";
import expenseServiceFactory from "@/factories/expenseServiceFactory";
import { getSession } from "next-auth/react";

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
    if (!expenses) return null;
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

export async function getServerSideProps(context: { req: any }) {
    const { service } = expenseServiceFactory();
    const expenses = await service.getAllExpenses();
    const session = await getSession({ req: context.req });
    if (!session) {
        return {
            redirect: {
                destination: process.env.REDIRECT_NOT_AUTH,
                permanent: false,
            },
        };
    }
    return {
        props: { expenses },
    };
}
export default ExpensePage;
