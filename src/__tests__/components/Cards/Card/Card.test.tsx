import Card from "@/components/Cards/Card/Card";
import "@testing-library/jest-dom";
import { Expense } from "@/models/Expense";
import { render, screen } from "@testing-library/react";

describe("Card tests", () => {
    const expense: Expense = {
        id: 1,
        name: "Celular",
        price: 1200,
        date: new Date(),
        createdAt: new Date().toLocaleDateString(),
        user: {
            id: 1,
            name: "Anthony",
            email: "a@a.com",
        },
    };

    test("The card should contain the expense infos on the screen", async () => {
        render(<Card expense={expense} />);
        const expenseName = await screen.getByText("Celular");
        const expensePrice = await screen.getByTestId("convertedPrice");

        expect(expenseName).toBeInTheDocument();
        expect(expensePrice).toBeInTheDocument();
    });
});
