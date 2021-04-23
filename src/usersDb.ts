import { db } from '../connection'

export interface IUser {
    id: string;
    name: string;
}

type UserParams = {
    id: string;
    name: string;
};

export function create(params: UserParams, t: typeof db): IUser | null {
    console.log(t)
    return {
        id: params.id,
        name: params.name
    }
};