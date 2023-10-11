import { Expense } from "@/models/Expense";
import { User } from "@/models/User";

const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
    },
];

const expenses: Expense[] = [
    {
        id: 1,
        name: "Groceries",
        price: 50.0,
        date: new Date("2023-10-05"),
        createdAt: "2023-10-05T14:30:00",
        user: users[0], // Assign a user object from the 'users' array
    },
    {
        id: 2,
        name: "Gasoline",
        price: 30.0,
        date: new Date("2023-10-06"),
        createdAt: "2023-10-06T09:15:00",
        user: users[1], // Assign a different user object
    },
    {
        id: 3,
        name: "Groceries",
        price: 50.0,
        date: new Date("2023-10-05"),
        createdAt: "2023-10-05T14:30:00",
        user: users[0], // Assign a user object from the 'users' array
    },
    {
        id: 4,
        name: "Groceries",
        price: 50.0,
        date: new Date("2023-10-05"),
        createdAt: "2023-10-05T14:30:00",
        user: users[0], // Assign a user object from the 'users' array
    },
    {
        id: 5,
        name: "Gasoline",
        price: 30.0,
        date: new Date("2023-10-06"),
        createdAt: "2023-10-06T09:15:00",
        user: users[1], // Assign a different user object
    },
    {
        id: 6,
        name: "Groceries",
        price: 50.0,
        date: new Date("2023-10-05"),
        createdAt: "2023-10-05T14:30:00",
        user: users[0], // Assign a user object from the 'users' array
    },
    {
        id: 7,
        name: "Groceries",
        price: 50.0,
        date: new Date("2023-10-05"),
        createdAt: "2023-10-05T14:30:00",
        user: users[0], // Assign a user object from the 'users' array
    },
];

export function getExpenses() {
    return expenses;
}
