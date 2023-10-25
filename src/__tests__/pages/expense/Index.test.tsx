import { ExpenseContext } from "@/contexts/expenseContext";
import ExpensePage from "@/pages/expense";
import { Expense } from "@prisma/client";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Index Expense", () => {
    const mockExpenses = Array.of<Expense>().fill(
        {
            id: 0,
            name: "",
            price: 0,
            description: "",
            date: new Date(),
            createdAt: new Date(),
            userId: 0,
        },
        10
    );
    const getExpenses = jest.fn().mockReturnValue(mockExpenses);
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
    test("Should render the modal when clicked", async () => {
        const button = await screen.findByRole("button", {
            name: "Add Expense",
        });
        await userEvent.click(button);
        const modal = await screen.findByText("Create Expense");
        expect(modal).toBeInTheDocument();
    });
});
