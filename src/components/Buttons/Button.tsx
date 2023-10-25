import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Oval } from "react-loader-spinner";

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    isLoading?: boolean;
};

type CustomButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ onClick, children, isLoading, ...props }: CustomButtonProps) {
    return (
        <button
            {...props}
            onClick={onClick}
            disabled={isLoading}
            className={`bg-emerald-300 p-2 rounded-md hover:bg-emerald-200 hover:shadow-xl ${props.className}`}
        >
            {isLoading ? (
                <div className="w-14 h-6">
                    <Oval
                        height={24}
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="white"
                        color="green"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
            ) : (
                children
            )}
        </button>
    );
}

export default Button;
