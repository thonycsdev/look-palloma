import NavBar from "@/components/NavBar/NavBar";
import { ExpenseContextProvider } from "@/contexts/expenseContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ExpenseContextProvider>
                <NavBar />
                <Component {...pageProps} />
            </ExpenseContextProvider>
        </>
    );
}
