import { Expense } from "@prisma/client";
import axios from "axios";

function expenseService() {
    async function createExpense(expense: Expense) {
        const result = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}api/expense`,
            expense
        );
        return result.status;
    }

    return { createExpense };
}

export default expenseService;
