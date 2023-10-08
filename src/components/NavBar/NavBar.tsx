import Link from "next/link";
import React from "react";

function NavBar() {
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
