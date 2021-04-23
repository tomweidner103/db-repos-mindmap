export interface IUser {
    id: string;
    name: string;
}

type UserParams = {
    id: string;
    name: string;
};

export function create(params: UserParams): IUser | null {
    return {
        id: params.id,
        name: params.name
    }
};