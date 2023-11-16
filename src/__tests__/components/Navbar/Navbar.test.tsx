import NavBar from "@/components/NavBar/NavBar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import client, { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

describe("Navbar tests", () => {
    const mockSession: Session = {
        expires: "1",
        user: { email: "a", name: "Delta", image: "c" },
    };
    beforeEach(() => {
        render(
            <SessionProvider session={mockSession}>
                <NavBar />
            </SessionProvider>
        );
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
