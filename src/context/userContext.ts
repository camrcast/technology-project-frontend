import { createContext } from "react";

export interface User {
    itemID: string,
    username: string,
    role: string
}

export const UserContext = createContext<User | undefined>(undefined);