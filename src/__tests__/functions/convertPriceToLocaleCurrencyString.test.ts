import { convertPriceToLocaleCurrencyString } from "@/functions/convertPriceToLocaleCurrencyString";

describe("Price locate string converter", () => {
    test("Should return a converted price to brazilian real", () => {
        const amount = 10;
        const expectedString = amount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        const result = convertPriceToLocaleCurrencyString(
            amount,
            "BRL",
            "pt-BR"
        );
        expect(result).toBeDefined();
        expect(result).toBe(expectedString);
    });

    test("Should throw when amount is 0 or undefined", () => {
        const amount = 0;
        expect(() =>
            convertPriceToLocaleCurrencyString(amount, "BRL", "pt-BR")
        ).toThrow();
    });
});
