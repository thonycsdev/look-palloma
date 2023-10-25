import React from "react";
import Card from "./Card/Card";
import { Expense } from "@prisma/client";

type CardProps = {
    expenses: Expense[];
};
function Cards({ expenses }: CardProps) {
    return (
        <>
            <div
                role="cards"
                className="flex justify-center gap-14 p-7 flex-wrap"
            >
                {expenses.map((expense) => (
                    <Card expense={expense} key={expense.id} />
                ))}
            </div>
        </>
    );
}

export default Cards;
