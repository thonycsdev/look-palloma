import { ExpenseContext } from "@/contexts/expenseContext";
import { useRouter } from "next/router";
import { useContext } from "react";

function useURL() {
    const router = useRouter();
    const expenseId = router.query.expenseId!;
    const { getSingleExpense } = useContext(ExpenseContext);
    const expense = getSingleExpense(+expenseId);
    return { expense };
}

export default useURL;
