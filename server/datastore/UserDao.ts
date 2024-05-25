import { User } from "../types";


export interface UserDoa{
    createUser(user: User): void;
    getUserByEmail (email: string): User | undefined ;
    getUserByUsername (username: string): User | undefined ;
}

