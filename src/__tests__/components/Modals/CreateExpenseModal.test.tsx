import CreateExpenseModal from "@/components/Modals/CreateExpenseModal";
import { ExpenseContext, ExpenseContextProps } from "@/contexts/expenseContext";
import parseDateToYYYYMMDD from "@/functions/parseDateToYYYYMMDD";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Create Expense Modal", () => {
    const onClose = jest.fn();
    const createExpense = jest.fn();
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
    test("should can createExpense from expense context when clicked", async () => {
        cleanup();
        const expenseCtxProps = {} as ExpenseContextProps;
        render(
            <ExpenseContext.Provider
                value={{ ...expenseCtxProps, createExpense }}
            >
                <CreateExpenseModal
                    isOpen={true}
                    onClose={() => console.log()}
                />
            </ExpenseContext.Provider>
        );
        const button = await screen.findByRole("button", {
            name: /create/i,
        });

        await userEvent.click(button);
        expect(createExpense).toBeCalled();
    });
});
