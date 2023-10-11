import HomePage from "@/components/Home/HomePage";
import { getExpenses } from "../../__mockData__/expensesUsers";

// type HomeProps = {
//     expenses: Expense[];
// };
export default function Home() {
    const expenses = getExpenses();
    return (
        <>
            <HomePage expenses={expenses} />
        </>
    );
}

export async function getStaticProps() {
    // const data = await getExpenses();
    return {
        props: {},
    };
}
