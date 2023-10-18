import React, { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};

function Button({
    onClick,
    children,
    ...props
}: ButtonProps | React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            onClick={onClick}
            className={`bg-emerald-300 p-2 rounded-md hover:bg-emerald-200 hover:shadow-xl ${props.className}`}
        >
            {children}
        </button>
    );
}

export default Button;
