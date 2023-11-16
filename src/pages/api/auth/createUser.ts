import userService from "@/services/userService";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { createUser } = userService();
    const { firstName, lastName, email, password } = req.body;
    if (req.method === "POST") {
        try {
            await createUser({ firstName, lastName, email, password });
            return res.status(201).json({ message: "User created" });
        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    return res.status(200).json(req.body);
}
