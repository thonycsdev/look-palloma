import NavBar from "@/components/NavBar/NavBar";
import { ExpenseContextProvider } from "@/contexts/expenseContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider>
                <SessionProvider session={pageProps.session}>
                    <div className="w-screen h-screen bg-slate-100">
                        <ExpenseContextProvider>
                            <NavBar />
                            <div className="flex justify-center items-center h-full">
                                <Component {...pageProps} />
                            </div>
                        </ExpenseContextProvider>
                    </div>
                </SessionProvider>
            </ChakraProvider>
        </>
    );
}
