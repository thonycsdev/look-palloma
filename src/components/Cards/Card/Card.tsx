"use client";

import { convertPriceToLocaleCurrencyString } from "@/functions/convertPriceToLocaleCurrencyString";

import { Expense } from "@/models/Expense";
import { useRouter } from "next/navigation";
import React from "react";

type CardProps = {
    expense: Expense;
};

function Card({ expense }: CardProps) {
    const router = useRouter();
    const convertedPrice = convertPriceToLocaleCurrencyString(
        expense.price,
        "BRL",
        "pt-BR"
    );
    return (
        <div
            role="card"
            className="w-60 h-48 bg-green-300 flex flex-col items-center rounded-b-3xl rounded-lg transform duration-150 hover:scale-110 hover:shadow-2xl shadow-md"
        >
            <div className="h-4/5 flex flex-col items-center gap-4 pb-3">
                <div className="flex-1 flex items-center">{expense.name}</div>
                <div data-testid="convertedPrice">{convertedPrice}</div>
                <div>{new Date(expense.date).toLocaleDateString()}</div>
            </div>
            <div
                role="card-push"
                onClick={() => router.push("/expense/" + expense.id)}
                className=" bg-green-200 rounded-b-3xl w-full h-1/5 flex justify-center items-center transform duration-150 hover:text-lg"
            >
                Ver Despesa
            </div>
        </div>
    );
}

export default Card;
