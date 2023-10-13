import Cards from "@/components/Cards/Cards";
import { render, screen } from "@testing-library/react";
import { getExpenses } from "../../../../__mockData__/expensesUsers";

describe("Cards", () => {
    test("Should render the same amount of expenses as cards", async () => {
        const expenses = getExpenses();
        render(<Cards expenses={expenses} />);
        const cards = await screen.findAllByRole("card");
        expect(cards).toHaveLength(expenses.length);
    });
});
