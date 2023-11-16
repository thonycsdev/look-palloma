import { stat } from "fs";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";

function NavBar() {
    const { status } = useSession();
    if (status === "loading") {
        return null;
    }
    if (status === "unauthenticated") {
        return null;
    }
    return (
        <>
            <div className="w-screen h-16 bg-green-400 flex items-center justify-between px-8">
                <Link href={"/"}>
                    <div className="font-extralight text-xl">Look Palloma</div>
                </Link>
                <div className="pr-6">
                    <Link href={"/expense"}>
                        <div className="font-medium">Despesa</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NavBar;
