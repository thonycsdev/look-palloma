import React, { useContext } from "react";
import { useParams } from "next/navigation";
import { ExpenseContext } from "@/contexts/expenseContext";

function Expense() {
    const params = useParams();
    const { getSingleExpense } = useContext(ExpenseContext);
    const expense = getSingleExpense(+params.expenseId);
    return (
        <>
            <div>
                <div>
                    <label htmlFor="expense-name">Expense:</label>
                    <input id="expense-name" defaultValue={expense.name} />
                </div>
                <div>
                    <label htmlFor="expense-price">Price:</label>
                    <input id="expense-price" defaultValue={expense.price} />
                </div>
                <div>
                    <label htmlFor="expense-date">Feito em:</label>
                    <input id="expense-date" defaultValue={expense.price} />
                </div>

                <div>
                    <button>Update Expense</button>
                    <button>Delete Expense</button>
                </div>
            </div>
        </>
    );
}

export default Expense;
