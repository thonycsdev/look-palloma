import { Expense } from "@/models/Expense";
import { createContext, useEffect, useState } from "react";
import { getExpenses } from "../../__mockData__/expensesUsers";

type ExpenseContextProps = {
    expenses: Expense[];
    setExpenses: (expense: Expense) => void;
    getSingleExpense: (expenseId: number) => Expense;
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

    useEffect(() => {
        setExpenses(getExpenses());
    }, []);

    const addExpense = (expense: Expense) => {
        setExpenses((old) => [...old, expense]);
    };

    const getSingleExpense = (expenseId: number) => {
        const expense = expenses.find((e) => e.id === expenseId);
        return expense!;
    };
    return (
        <ExpenseContext.Provider
            value={{
                expenses: expenses,
                setExpenses: addExpense,
                getSingleExpense,
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};
