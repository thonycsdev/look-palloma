import { User } from "./User";

export type Expense = {
    id: number;
    name: string;
    price: number;
    date: string;
    createdAt: string;
    user: User;
};
