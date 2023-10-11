import Filter from "@/components/Filter/Filter";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Filter tests", () => {
    const onInputChange = jest.fn();
    beforeEach(() => {
        render(<Filter onInputChange={onInputChange} />);
    });

    test("Should render the name input field", async () => {
        const input = await screen.getByLabelText("search-input");
        expect(input).toBeInTheDocument();
    });

    test("Input field must have nothing when started", async () => {
        const input = (await screen.getByLabelText(
            "search-input"
        )) as HTMLInputElement;
        expect(input.value).toBe("");
    });
    test("Should call the onFilterChange function", async () => {
        const input = (await screen.getByLabelText(
            "search-input"
        )) as HTMLInputElement;
        fireEvent.change(input, { target: { value: "teste" } });
        expect(input.value).toBe("teste");
        expect(onInputChange).toHaveBeenCalled();
    });
});
