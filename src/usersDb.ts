import { db } from '../types'

export interface User {
    id: string;
    name: string;
}

type UserParams = {
    id: string;
    name: string;
}

type Task = {
    func: (param: string) => string = function {
        return param
    }
}

export function create(data: UserParams, t: Task): Promise<string> {
    return t.func(data.id)
}