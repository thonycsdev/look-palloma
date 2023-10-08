import { User } from "./User";

export type Expense = {
    id: number;
    name: string;
    price: number;
    date: Date;
    createdAt: string;
    user: User;
};
