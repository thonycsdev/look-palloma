import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import { Expense } from "@prisma/client";

function HomePage({ expenses }: { expenses: Expense[] }) {
    const [filtered, setFiltered] = useState<Expense[]>(expenses);

    const onFilterChanged = (searchTerm: string) => {
        const filteredExpenses = expenses.filter((expense) =>
            expense.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFiltered(filteredExpenses);
    };
    return (
        <div className="h-full w-full flex flex-col items-center pt-11">
            <Filter onInputChange={onFilterChanged} />
            <Cards expenses={filtered} />
        </div>
    );
}

export default HomePage;
