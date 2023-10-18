import { Expense } from "@/models/Expense";
import { createContext, useEffect, useState } from "react";
import { getExpenses } from "../../__mockData__/expensesUsers";

type ExpenseContextProps = {
    expenses: Expense[];
    setExpenses: (expense: Expense) => void;
    getSingleExpense: (expenseId: number) => Expense | undefined;
    updateExpense: (expense: Partial<Expense>, id: number) => void;
    createExpense: (expense: Expense) => void;
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
        return expense;
    };
    const updateExpense = (expense: Partial<Expense>, id: number) => {
        const idx = expenses.findIndex((e) => e.id === id);
        if (idx < 0) throw new Error(`Expense not found with id ${id}`);

        const expenseToUpdate = expenses[idx];
        expenses[idx] = {
            ...expenseToUpdate,
            date: expense.date!,
            name: expense.name!,
            price: expense.price!,
        };
    };

    const createExpense = (expense: Expense) => {
        setExpenses((old) => [...old, { ...expense }]);
    };
    return (
        <ExpenseContext.Provider
            value={{
                createExpense,
                updateExpense,
                expenses: expenses,
                setExpenses: addExpense,
                getSingleExpense,
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};
