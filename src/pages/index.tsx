import HomePage from "@/components/Home/HomePage";
import { getExpenses } from "../../__mockData__/expensesUsers";

export default function Home() {
    const expenses = getExpenses();
    return (
        <>
            <HomePage expenses={expenses} />
        </>
    );
}
