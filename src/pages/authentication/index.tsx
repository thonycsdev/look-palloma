import useLoading from "@/hooks/useLoading";
import { getSession, signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
    const { changeLoadingState, isLoading } = useLoading();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        try {
            changeLoadingState();
            signIn("credentials", {
                redirect: true,
                callbackUrl: "/",
                email: data.email,
                password: data.password,
            });
        } catch (error) {
            console.log(error);
        } finally {
            changeLoadingState();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-4/5">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="text-lg font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`border rounded-lg py-2 px-3 ${
                                errors.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            {...register("email", {
                                required: "Email is required",
                                pattern:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.root?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="password"
                            className="text-lg font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`border rounded-lg py-2 px-3 ${
                                errors.password
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            {...register("password", {
                                required: "A password is required",
                            })}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.root?.message}
                            </span>
                        )}
                    </div>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <button
                            type="submit"
                            className="bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-400 transition-colors duration-300 max-sm:w-full"
                        >
                            Login
                        </button>
                    )}
                </form>
                <div className="mt-4">
                    <p>
                        Don't have an account?{" "}
                        <Link
                            href="authentication/sign-up"
                            className="text-cyan-600 hover:text-cyan-400"
                        >
                            Click here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
export async function getServerSideProps(context: { req: any }) {
    const session = await getSession({ req: context.req });
    if (session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
}

export default LoginForm;
