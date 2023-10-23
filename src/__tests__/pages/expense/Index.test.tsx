import { ExpenseContext } from "@/contexts/expenseContext";
import ExpensePage from "@/pages/expense";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getExpenses } from "../../../../__mockData__/expensesUsers";

describe("Index Expense", () => {
    const addExpense = jest.fn();
    const onOpen = jest.fn();
    jest.mock("@chakra-ui/react", () => {
        return {
            useDisclosure: {
                onOpen,
            },
        };
    });
    beforeEach(() => {
        render(
            <ExpenseContext.Provider
                value={{
                    createExpense: addExpense,
                    expenses: [],
                    getSingleExpense: jest.fn(),
                    setExpenses: jest.fn(),
                    removeExpense: jest.fn(),
                }}
            >
                <ExpensePage expenses={getExpenses()} />
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
    test("Should render the modal when clicked", async () => {
        const button = await screen.findByRole("button", {
            name: "Add Expense",
        });
        await userEvent.click(button);
        const modal = await screen.findByText("Create Expense");
        expect(modal).toBeInTheDocument();
    });
});
