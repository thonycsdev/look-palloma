/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExpenseContextProvider } from "@/contexts/expenseContext";
import { render } from "@testing-library/react";

const renderWithContext = (ui: any, options: any) =>
    render(ui, { wrapper: ExpenseContextProvider, ...options });

export * from "@testing-library/react";

export { renderWithContext as render };
