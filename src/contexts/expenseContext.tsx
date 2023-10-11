import { Expense } from "@/models/Expense";
import { createContext, useEffect, useState } from "react";
import { getExpenses } from "../../__mockData__/expensesUsers";

type ExpenseContextProps = {
    expenses: Expense[];
    setExpenses: (expense: Expense) => void;
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
    return (
        <ExpenseContext.Provider
            value={{ expenses: expenses, setExpenses: addExpense }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};
