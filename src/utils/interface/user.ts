export interface IUser {
    id: string
    email: string
    password: string
}

export interface CustomRequest {
    user: IUser
    file: object
    params: object
    query: object
    path: object
}

export interface PayloadInterface {
    id: string
    email: string
}

export interface Credentials {
    email: string
    password: string
}