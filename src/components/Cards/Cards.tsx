import React from "react";
import Card from "./Card/Card";
import { Expense } from "@/models/Expense";

type CardProps = {
    expenses: Expense[];
};
function Cards({ expenses }: CardProps) {
    return (
        <>
            <div className="flex justify-center gap-14 p-7">
                {expenses.map((expense) => (
                    <Card expense={expense} key={expense.id} />
                ))}
            </div>
        </>
    );
}

export default Cards;
