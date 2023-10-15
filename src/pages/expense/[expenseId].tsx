import React, { useContext } from "react";
import { useRouter } from "next/router";
import { ExpenseContext } from "@/contexts/expenseContext";
import Button from "@/components/Buttons/Button";

function ExpenseDetails() {
    const router = useRouter();
    const { getSingleExpense } = useContext(ExpenseContext);
    const expenseId = router.query.expenseId!;
    const expense = getSingleExpense(+expenseId);
    const formatedDate = expense.date.toLocaleDateString();
    return (
        <>
            <div className="flex flex-col w-full h-auto justify-center items-center gap-7">
                <div className="flex flex-col">
                    <label htmlFor="expense-name">Expense:</label>
                    <input
                        id="expense-name"
                        defaultValue={expense.name}
                        readOnly
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="expense-price">Price:</label>
                    <input
                        id="expense-price"
                        defaultValue={expense.price}
                        readOnly
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="expense-date">Made in:</label>
                    <input
                        id="expense-date"
                        defaultValue={formatedDate}
                        readOnly
                    />
                </div>
                <div className="flex gap-10">
                    <Button>Update Expense</Button>
                    <Button>Delete Expense</Button>
                </div>
            </div>
        </>
    );
}

export default ExpenseDetails;
