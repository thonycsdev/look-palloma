import expenseServiceFactory from "@/factories/expenseServiceFactory";
import { Expense } from "@prisma/client";
import { useRouter } from "next/router";
import { Dispatch, createContext, useState } from "react";

export type ExpenseContextProps = {
    expenses: Expense[];
    setExpenses: Dispatch<Expense[]>;
    getSingleExpense: (expenseId: number) => Expense | undefined;
    createExpense: (expense: Expense) => Promise<void>;
    removeExpense: (expenseId: number) => Promise<void>;
};

export const ExpenseContext = createContext<ExpenseContextProps>(
    {} as ExpenseContextProps
);

type ExpenseContextProviderProps = {
    children: React.ReactNode;
};

export const ExpenseContextProvider = ({
    children,
}: ExpenseContextProviderProps) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const { service } = expenseServiceFactory();
    const router = useRouter();

    const getSingleExpense = (expenseId: number) => {
        const expense = expenses.find((e) => e.id === expenseId);
        return expense;
    };

    const createExpense = async (expense: Expense) => {
        try {
            await service.createExpense(expense);
            router.reload();
        } catch (error) {
            console.log(error);
            throw new Error();
        }
    };

    const removeExpense = async (expenseId: number) => {
        try {
            await service.removeExpense(expenseId);
            router.replace("/expense");
        } catch (error) {
            console.log(error);
            throw new Error("Error to remove expense");
        }
    };
    return (
        <ExpenseContext.Provider
            value={{
                createExpense,
                setExpenses,
                expenses: expenses,
                getSingleExpense,
                removeExpense,
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};
