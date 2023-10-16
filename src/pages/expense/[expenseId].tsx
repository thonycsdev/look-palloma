import React, { useContext } from "react";
import { useRouter } from "next/router";
import { ExpenseContext } from "@/contexts/expenseContext";
import Button from "@/components/Buttons/Button";

export default function ExpenseDetails() {
    const router = useRouter();

    const expenseId = router.query.expenseId!;
    const { getSingleExpense } = useContext(ExpenseContext);
    const expense = getSingleExpense(+expenseId);
    if (!expense) return <h1>Loading...</h1>;
    const formatedDate = expense.date.toLocaleDateString();

    const handleUpdate = () => {
        console.log("update");
    };
    return (
        <>
            <form>
                <div className="flex flex-col w-full h-auto justify-center items-center gap-7">
                    <div className="flex flex-col">
                        <label htmlFor="expense-name">Expense:</label>
                        <input id="expense-name" defaultValue={expense.name} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="expense-price">Price:</label>
                        <input
                            id="expense-price"
                            defaultValue={expense.price}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="expense-date">Made in:</label>
                        <input id="expense-date" defaultValue={formatedDate} />
                    </div>
                    <div className="flex gap-10">
                        <Button onClick={handleUpdate}>Update Expense</Button>
                        <Button>Delete Expense</Button>
                    </div>
                </div>
            </form>
        </>
    );
}
