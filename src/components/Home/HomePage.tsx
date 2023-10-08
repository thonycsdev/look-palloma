import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import { Expense } from "@/models/Expense";

function HomePage({ expenses }: { expenses: Expense[] }) {
    const [filtered, setExpensesFiltered] = useState<Expense[]>(expenses);
    console.log(setExpensesFiltered);

    return (
        <div className="h-full w-full flex flex-col items-center pt-11">
            <Filter />
            <Cards expenses={filtered} />
        </div>
    );
}

export default HomePage;
