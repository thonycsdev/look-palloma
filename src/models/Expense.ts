import { User } from "./User";

export type Expense = {
    id: number;
    name: string;
    price: number;
    description?: string;
    date: Date;
    createdAt: Date;
    user: User;
};
