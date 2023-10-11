import NavBar from "@/components/NavBar/NavBar";
import { ExpenseContextProvider } from "@/contexts/expenseContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className="w-screen h-screen bg-slate-100">
                <ExpenseContextProvider>
                    <NavBar />
                    <div className="w-10/12 mx-auto bg-teal-400 rounded-md h-auto py-12 mt-10">
                        <Component {...pageProps} />
                    </div>
                </ExpenseContextProvider>
            </div>
        </>
    );
}
