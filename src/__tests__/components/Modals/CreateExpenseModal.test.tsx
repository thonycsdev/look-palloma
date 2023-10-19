import CreateExpenseModal from "@/components/Modals/CreateExpenseModal";
import parseDateToYYYYMMDD from "@/functions/parseDateToYYYYMMDD";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Create Expense Modal", () => {
    const onClose = jest.fn();
    beforeEach(() => {
        render(<CreateExpenseModal isOpen={true} onClose={onClose} />);
    });
    test("Should contain the input for the name beign empty", async () => {
        const input = await screen.findByRole("textbox", {
            name: /expense name:/i,
        });

        expect(input).toBeInTheDocument();
        expect(input).toHaveTextContent("");
    });
    test("Should contain the input for the price beign empty", async () => {
        const input = (await screen.findByRole("spinbutton", {
            name: /price:/i,
        })) as HTMLInputElement;

        expect(input).toBeInTheDocument();
        expect(input.value).toBe("");
    });

    test("Should contain the input for the price beign empty", async () => {
        const input = (await screen.findByTestId(
            "expense-date"
        )) as HTMLInputElement;

        expect(input).toBeInTheDocument();
        expect(input.value).toBe(parseDateToYYYYMMDD(new Date()));
    });

    test("Should contain the 3 buttons", async () => {
        const buttons = await screen.findAllByRole("button");
        expect(buttons).toHaveLength(3);
    });
    test("Close button should call on Close without parameters", async () => {
        const button = await screen.findByRole("button", {
            name: /cancel/i,
        });

        await userEvent.click(button);
        expect(onClose).toBeCalled();
    });
});
