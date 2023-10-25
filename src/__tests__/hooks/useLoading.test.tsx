import { useLoading } from "@/hooks/useLoading";
import { act, cleanup, renderHook } from "@testing-library/react";

describe("useLoading Custom component", () => {
    afterEach(() => {
        cleanup();
    });
    test("Should render false as the first value", () => {
        //render hook returns a object with the properties of my custom hook
        const { result } = renderHook(useLoading);
        expect(result.current.isLoading).toBeFalsy();
    });
    test("Should be true after the function call", () => {
        const { result } = renderHook(useLoading);
        //act ensures that the component is properly updated before assetertions are executed
        act(() => result.current.handleSwitchLoading());
        expect(result.current.isLoading).toBeTruthy();
    });
    test("Should be false after 2 function call", () => {
        const { result } = renderHook(useLoading);
        //act ensures that the component is properly updated before assetertions are executed
        act(() => result.current.handleSwitchLoading());
        act(() => result.current.handleSwitchLoading());
        expect(result.current.isLoading).toBeFalsy();
    });
});
