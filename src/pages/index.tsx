import HomePage from "@/components/Home/HomePage";
import { getExpenses } from "../../__mockData__/expensesUsers";

// type HomeProps = {
//     expenses: Expense[];
// };
export default function Home() {
    const expenses = getExpenses();
    return (
        <>
            <div className="w-screen h-screen bg-slate-100">
                <HomePage expenses={expenses} />
            </div>
        </>
    );
}

export async function getStaticProps() {
    const data = await getExpenses();
    console.log(data);
    return {
        props: {},
    };
}
