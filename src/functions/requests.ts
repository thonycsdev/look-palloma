import { LoginCredentials, UserPayload } from "@/models/User";
import axios from "axios";

async function createUserRequest(userPayload: UserPayload) {
    const response = await axios.post("/api/auth/createUser", userPayload);
    return response;
}

// async function loginUser(credentials: LoginCredentials){
//     const response = await axios.post("/api/auth/login", credentials);
//     return response;
// }

export { createUserRequest };
