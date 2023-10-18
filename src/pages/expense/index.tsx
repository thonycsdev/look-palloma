import HomePage from "@/components/Home/HomePage";
import React from "react";
import { getExpenses } from "../../../__mockData__/expensesUsers";
import Button from "@/components/Buttons/Button";

function ExpensePage() {
    const expenses = getExpenses();
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <Button className="self-end px-6 m-6">Add Expense</Button>
                <HomePage expenses={expenses} />
            </div>
        </>
    );
}

export default ExpensePage;
