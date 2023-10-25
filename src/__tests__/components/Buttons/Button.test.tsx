import Button from "@/components/Buttons/Button";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button test", () => {
    beforeEach(() => {
        render(<Button>Test</Button>);
    });
    test("Should render the children of the button", async () => {
        const button = await screen.findByText("Test");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Test");
    });
    test("OnClick should call any function that was provided in the props", async () => {
        cleanup();
        const handle = jest.fn();
        render(<Button onClick={handle}>Test</Button>);
        const button = await screen.findByText("Test");
        await userEvent.click(button);
        expect(handle).toHaveBeenCalled();
    });
    test("Should not render text isLoading is true", async () => {
        cleanup();
        render(<Button isLoading={true}>Test</Button>);
        const loadingComponent = await screen.queryByRole("button", {
            name: "Test",
        });
        expect(loadingComponent).not.toBeInTheDocument();
    });
    test("Should render the loading component when isLoading is true", async () => {
        cleanup();
        render(<Button isLoading={true}>Test</Button>);
        const loadingComponent = await screen.queryByRole("button");
        expect(loadingComponent).toBeInTheDocument();
        expect(loadingComponent).not.toBeEnabled();
    });
});
