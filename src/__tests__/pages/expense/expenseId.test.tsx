import { ExpenseContext } from "@/contexts/expenseContext";
import parseDateToYYYYMMDD from "@/functions/parseDateToYYYYMMDD";
import { Expense } from "@/models/Expense";
import ExpenseDetails from "@/pages/expense/[expenseId]";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

jest.mock("next/router", () => {
    return {
        useRouter: jest.fn().mockReturnValue({
            query: {
                expenseId: "1",
            },
        }),
    };
});

const testValue: Expense = {
    id: 1,
    name: "test",
    price: 100,
    date: new Date("1998/11/15"),
    user: {
        id: 1,
        name: "test",
        email: "<EMAIL>",
    },
    createdAt: new Date(),
};
const getSingleExpense = jest.fn().mockReturnValue(testValue);

describe("Index Expense Details", () => {
    const removeExpense = jest.fn();
    beforeEach(() => {
        render(
            <ExpenseContext.Provider
                value={{
                    createExpense: jest.fn(),
                    getSingleExpense: getSingleExpense,
                    expenses: [],
                    setExpenses: jest.fn(),
                    removeExpense,
                }}
            >
                <ExpenseDetails />
            </ExpenseContext.Provider>
        );
    });
    test("Should call the functions to get the expense", async () => {
        expect(useRouter).toBeCalled();
        expect(getSingleExpense).toBeCalled();
        const inputs = await screen.findAllByRole("textbox");
        expect(inputs).toHaveLength(2);
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
        const expenseDate = (await screen.findByTestId(
            "expense-date"
        )) as HTMLInputElement;
        expect(expenseDate).toBeInTheDocument();

        expect(expenseDate.defaultValue).toBe(
            parseDateToYYYYMMDD(testValue.date)
        );
    });

    test("User should change the default information date", async () => {
        const expenseDate = (await screen.findByTestId(
            "expense-date"
        )) as HTMLInputElement;
        await userEvent.clear(expenseDate);
        await userEvent.click(expenseDate);
        await userEvent.type(expenseDate, "1998-11-15");

        expect(expenseDate).toHaveValue("1998-11-15");
    });
    test("User should change the default information price", async () => {
        const expensePrice = await screen.findByRole("textbox", {
            name: "Price:",
        });
        await userEvent.clear(expensePrice);
        await userEvent.type(expensePrice, "1");
        expect(expensePrice).toHaveValue("1");
    });
    test("User should change the default information name", async () => {
        const expenseName = await screen.findByRole("textbox", {
            name: "Expense:",
        });
        await userEvent.clear(expenseName);
        await userEvent.type(expenseName, "a1");
        expect(expenseName).toHaveValue("a1");
    });

    test("Buttons should be in the document", async () => {
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

    test("OnClick delte should call delete method from context", async () => {
        const deleteBtn = await screen.findByRole("button", {
            name: /delete expense/i,
        });
        await userEvent.click(deleteBtn);
        expect(removeExpense).toBeCalled();
    });
});
