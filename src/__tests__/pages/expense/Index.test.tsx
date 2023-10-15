import { ExpenseContext } from "@/contexts/expenseContext";
import { Expense } from "@/models/Expense";
import ExpenseDetails from "@/pages/expense/[expenseId]";
import { render, screen } from "@testing-library/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";

jest.mock("next/navigation", () => {
    return {
        useParams: jest.fn().mockReturnValue({ expenseId: 1 } as Params),
    };
});

const testValue: Expense = {
    id: 1,
    name: "test",
    price: 100,
    date: new Date(),
    user: {
        id: 1,
        name: "test",
        email: "<EMAIL>",
    },
    createdAt: new Date(),
};
const getSingleExpense = jest.fn().mockReturnValue(testValue);

describe("Index Expense Details", () => {
    beforeEach(() => {
        render(
            <ExpenseContext.Provider
                value={{
                    getSingleExpense: getSingleExpense,
                    expenses: [],
                    setExpenses: jest.fn(),
                }}
            >
                <ExpenseDetails />
            </ExpenseContext.Provider>
        );
    });
    test("Should call the functions to get the expense", async () => {
        expect(useParams).toBeCalled();
        expect(getSingleExpense).toBeCalled();
        const inputs = await screen.findAllByRole("textbox");
        expect(inputs).toHaveLength(3);
    });

    test("Should render expense name and have its default value", async () => {
        const expenseName = await screen.findByRole("textbox", {
            name: "Expense:",
        });
        expect(expenseName).toBeInTheDocument();
        expect(expenseName).toHaveValue(testValue.name);
    });
    test("Should render expense price and have its default value", async () => {
        const expensePrice = await screen.findByRole("textbox", {
            name: "Price:",
        });
        expect(expensePrice).toBeInTheDocument();
        expect(expensePrice).toHaveValue(testValue.price.toString());
    });
    test("Should render expense date and have its default value", async () => {
        const expenseDate = await screen.findByRole("textbox", {
            name: "Made in:",
        });
        expect(expenseDate).toBeInTheDocument();

        expect(expenseDate).toHaveValue(
            testValue.createdAt.toLocaleDateString()
        );
    });

    test("Should update the expense details", async () => {
        const buttons = await screen.findAllByRole("button");
        const update = await screen.findByRole("button", {
            name: /update expense/i,
        });
        const deleteButton = await screen.findByRole("button", {
            name: /delete expense/i,
        });

        expect(buttons).toHaveLength(2);
        expect(update).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();
    });
});
