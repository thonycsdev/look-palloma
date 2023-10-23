import expenseServiceFactory from "@/factories/expenseServiceFactory";
import { Expense } from "@/models/Expense";
import { Dispatch, createContext, useState } from "react";

type ExpenseContextProps = {
    expenses: Expense[];
    setExpenses: Dispatch<Expense[]>;
    getSingleExpense: (expenseId: number) => Expense | undefined;
    createExpense: (expense: Expense) => void;
    removeExpense: (expenseId: number) => void;
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

    const getSingleExpense = (expenseId: number) => {
        const expense = expenses.find((e) => e.id === expenseId);
        return expense;
    };

    const createExpense = (expense: Expense) => {
        setExpenses((old) => [...old, { ...expense }]);
    };

    const removeExpense = async (expenseId: number) => {
        try {
            await service.removeExpense(expenseId);
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
