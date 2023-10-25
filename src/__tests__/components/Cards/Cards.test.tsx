import { createExpenseArray } from "@/__tests__/__mocks__/expenseMocks";
import Cards from "@/components/Cards/Cards";
import { render, screen } from "@testing-library/react";
jest.mock("next/navigation");

describe("Cards", () => {
    test("Should render the same amount of expenses as cards", async () => {
        const expenses = createExpenseArray(50);
        render(<Cards expenses={expenses} />);
        const cards = await screen.findAllByRole("card");
        expect(cards).toHaveLength(expenses.length);
    });
});
