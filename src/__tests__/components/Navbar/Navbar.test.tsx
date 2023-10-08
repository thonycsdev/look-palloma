import NavBar from "@/components/NavBar/NavBar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Navbar tests", () => {
    beforeEach(() => {
        render(<NavBar />);
    });
    test("The logo should be in the document", async () => {
        const element = await screen.findByText("Look Palloma");
        expect(element).toBeInTheDocument();
    });
    test("The Despesa should be in the document", async () => {
        const element = await screen.findByText("Despesa");
        expect(element).toBeInTheDocument();
    });
});
