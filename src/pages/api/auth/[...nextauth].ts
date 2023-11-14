import userService from "@/services/userService";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const { signInUser } = userService();
const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "your-cool-Email",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password",
                },
            },
            async authorize(credentials) {
                if (!credentials) throw new Error("No credentials provided");
                const user = await signInUser(credentials);
                if (user) {
                    return user as any;
                } else {
                    return null;
                }
            },
        }),
    ],
};

export default NextAuth(options);
