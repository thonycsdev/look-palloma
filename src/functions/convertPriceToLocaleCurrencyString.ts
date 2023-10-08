export function convertPriceToLocaleCurrencyString(
    price: number,
    currency: string,
    nationality: string
): string {
    if (!price || !currency || !nationality) {
        throw new Error("Invalid information");
    }
    const result = price.toLocaleString(nationality, {
        style: "currency",
        currency: currency,
    });

    return result.replace(" ", ":");
}
