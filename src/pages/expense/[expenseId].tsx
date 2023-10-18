import React, { useContext } from "react";
import Button from "@/components/Buttons/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import useURL from "@/hooks/useURL";
import { ExpenseContext } from "@/contexts/expenseContext";
import parseDateToYYYYMMDD from "@/functions/parseDateToYYYYMMDD";
import { Expense } from "@/models/Expense";

export default function ExpenseDetails() {
    const { expense } = useURL();
    const { updateExpense } = useContext(ExpenseContext);
    const { handleSubmit, register } = useForm();
    if (!expense) return <h1>Loading...</h1>;

    const handleUpdate: SubmitHandler<Partial<Expense>> = (data) => {
        const payload = {
            ...data,
            date: new Date(data.date!),
            price: +data.price!,
        };
        updateExpense(payload, expense.id);
    };
    return (
        <>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="flex flex-col w-full h-auto justify-center items-center gap-7">
                    <div className="flex flex-col">
                        <label htmlFor="expense-name">Expense:</label>
                        <input
                            id="expense-name"
                            {...register("name")}
                            defaultValue={expense?.name}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="expense-price">Price:</label>
                        <input
                            id="expense-price"
                            {...register("price")}
                            defaultValue={expense?.price}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="expense-date">Made in:</label>
                        <input
                            type="date"
                            data-testid="expense-date"
                            id="expense-date"
                            defaultValue={parseDateToYYYYMMDD(expense?.date)}
                            {...register("date")}
                        />
                    </div>
                    <div className="flex gap-10">
                        <Button type="submit">Update Expense</Button>
                        <Button>Delete Expense</Button>
                    </div>
                </div>
            </form>
        </>
    );
}
