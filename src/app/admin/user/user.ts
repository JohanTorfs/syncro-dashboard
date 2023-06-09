import { Role } from "../role/role";

export interface User {
    id: number;
    firstname?: string;
    lastname?: string;
    email: string;
    password: string;
    token: string;
    role?: Role;
    role_id?: number;
}