// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userService from "@/services/userService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { createUser } = userService();
    const { name, email, password } = req.body;
    if (req.method === "POST") {
        try {
            await createUser({ name, email, password });
            return res.status(201).json({ message: "User created" });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "An error has ocurred" });
        }
    }

    return res.status(200);
}
