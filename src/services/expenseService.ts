import { Expense } from "@prisma/client";
import axios from "axios";

function expenseService() {
    async function createExpense(expense: Expense) {
        const result = await axios.post(
            "http://localhost:3000/api/expense",
            expense
        );
        return result.status;
    }

    return { createExpense };
}

export default expenseService;
