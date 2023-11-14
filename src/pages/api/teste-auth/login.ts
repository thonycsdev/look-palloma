import userService from "@/services/userService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { signInUser } = userService();
    const { email, password } = req.body;
    if (req.method === "POST") {
        try {
            const user = await signInUser({ email: email, password: password });
            console.log({ email, password });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(401).json({ message: "User not found" });
        }
    }

    return res.status(405);
}
