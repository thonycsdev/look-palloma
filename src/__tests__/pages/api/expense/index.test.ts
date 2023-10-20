describe("Expense API integration tests", () => {
    const fetch = jest.fn().mockResolvedValue({ status: 200 });
    test("Should return status 200 when recive a request", async () => {
        const apiURL = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiURL}/expense`);
        expect(response.status).toBe(200);
    });
});
