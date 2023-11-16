export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

export type LoginCredentials = {
    email: string;
    password: string;
};

export type UserPayload = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};
