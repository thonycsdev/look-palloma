import { Expense } from "@/models/Expense";
import { User } from "@/models/User";
const date = new Date();

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
        date: date,
        createdAt: date,
        user: users[0], // Assign a user object from the 'users' array
    },
    {
        id: 2,
        name: "Gasoline",
        price: 30.0,
        date: date,
        createdAt: date,
        user: users[1], // Assign a different user object
    },
    {
        id: 3,
        name: "Groceries",
        price: 50.0,
        date: date,
        createdAt: date,
        user: users[0], // Assign a user object from the 'users' array
    },
    {
        id: 4,
        name: "Groceries",
        price: 50.0,
        date: date,
        createdAt: date,
        user: users[0], // Assign a user object from the 'users' array
    },
    {
        id: 5,
        name: "Gasoline",
        price: 30.0,
        date: date,
        createdAt: date,
        user: users[1], // Assign a different user object
    },
    {
        id: 6,
        name: "Groceries",
        price: 50.0,
        date: date,
        createdAt: date,
        user: users[0], // Assign a user object from the 'users' array
    },
    {
        id: 7,
        name: "Groceries",
        price: 50.0,
        date: date,
        createdAt: date,
        user: users[0], // Assign a user object from the 'users' array
    },
];

export function getExpenses() {
    return expenses;
}
