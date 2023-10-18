import { ExpenseContext } from "@/contexts/expenseContext";
import ExpensePage from "@/pages/expense";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Index Expense", () => {
    const addExpense = jest.fn();
    beforeEach(() => {
        render(
            <ExpenseContext.Provider
                value={{
                    createExpense: addExpense,
                    expenses: [],
                    getSingleExpense: jest.fn(),
                    setExpenses: jest.fn(),
                    updateExpense: jest.fn(),
                }}
            >
                <ExpensePage />
            </ExpenseContext.Provider>
        );
    });
    test("Should render the add button with the correct string", async () => {
        const button = await screen.findByText("Add Expense");
        expect(button).toBeInTheDocument();
    });

    test("Should call the add expense handler", async () => {
        const button = await screen.findByRole("button", {
            name: "Add Expense",
        });
        await userEvent.click(button);
        expect(addExpense).toBeCalled();
    });
});
