import { ExpenseContext } from "@/contexts/expenseContext";
import Expense from "@/pages/expense/[expenseId]";
import { render, screen, waitFor } from "@testing-library/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
jest.mock("next/navigation", () => {
    return {
        useParams: jest.fn().mockReturnValue({ expenseId: 1 } as Params),
    };
});

const testValue = {
    id: 1,
    name: "test",
    amount: 100,
    createdAt: new Date(),
    updatedAt: new Date(),
};
const getSingleExpense = jest.fn().mockReturnValue(testValue);
beforeEach(() => {
    render(
        <ExpenseContext.Provider
            value={{
                getSingleExpense: getSingleExpense,
                expenses: [],
                setExpenses: jest.fn(),
            }}
        >
            <Expense />
        </ExpenseContext.Provider>
    );
});

describe("Index Expense Details", () => {
    test("Should render the expense details", () => {
        const expenseName = screen.getByLabelText("Expense:");
        const expensePrice = screen.getByLabelText("Price:");
        const expenseDate = screen.getByLabelText("Feito em:");

        expect(useParams).toBeCalled();
        expect(getSingleExpense).toBeCalled();

        expect(expenseName).toBeInTheDocument();
        expect(expenseName).toHaveValue(testValue.name);

        expect(expensePrice).toBeInTheDocument();
        waitFor(() => expect(expensePrice).toHaveValue(testValue.amount));

        expect(expenseDate).toBeInTheDocument();
        waitFor(() =>
            expect(expenseDate).toHaveValue(
                testValue.createdAt.toLocaleDateString()
            )
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
