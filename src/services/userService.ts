import { userRepositoryFactory } from "@/factories/userRepositoryFactory";
import { UserPayload } from "@/models/User";
import { User } from "@prisma/client";

function userService() {
    const { respository } = userRepositoryFactory();

    async function createUser(payload: UserPayload) {
        return await respository.createUser(payload);
    }

    async function signInUser(credentials: {
        email: string;
        password: string;
    }) {
        return await respository.signInUser(credentials);
    }

    return { createUser, signInUser };
}

export default userService;
