import Home from "@/pages";
import { render } from "@testing-library/react";
describe("Index Test", () => {
    test("Should render the index", () => {
        render(<Home />);
    });
});
