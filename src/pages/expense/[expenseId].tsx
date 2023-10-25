import React, { useContext, useState } from "react";
import Button from "@/components/Buttons/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import useURL from "@/hooks/useURL";
import parseDateToYYYYMMDD from "@/functions/parseDateToYYYYMMDD";
import { Expense } from "@prisma/client";
import { ExpenseContext } from "@/contexts/expenseContext";

export default function ExpenseDetails() {
    const { expense } = useURL();
    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit, register } = useForm();
    const { removeExpense } = useContext(ExpenseContext);
    if (!expense) return <h1>Loading...</h1>;

    const handleUpdate: SubmitHandler<Partial<Expense>> = (data) => {
        const payload = {
            ...data,
            date: new Date(data.date!),
            price: +data.price!,
        };
        console.log(payload);
    };

    const handleRemove = async (expenseId: number) => {
        try {
            setIsLoading(true);
            await removeExpense(expenseId);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
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
                            defaultValue={parseDateToYYYYMMDD(
                                new Date(expense?.date)
                            )}
                            {...register("date")}
                        />
                    </div>
                    <div className="flex gap-10">
                        <Button type="submit">Update Expense</Button>
                        <Button
                            isLoading={isLoading}
                            onClick={() => handleRemove(expense.id)}
                            disabled={isLoading}
                        >
                            Delete Expense
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}
