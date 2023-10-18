import ExpensePage from "@/pages/expense";
import { render, screen } from "@testing-library/react";

describe("Index Expense", () => {
    beforeEach(() => {
        render(<ExpensePage />);
    });
    test("Should render the add button with the correct string", async () => {
        const button = await screen.findByText("Add Expense");
        expect(button).toBeInTheDocument();
    });
});
