import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";


export type GetUsersRequest = {
    user_type?: 'admin'|'employee' | 'support',
    group_id?: string,
    query?: string,
    user_id?: number
}

export type Group = {
    id: number,
    name: string,
    company_id: number,
    deleted: number,
    deleted_at: string,
    custom_working_time: number,
    timezone: string,
    is_demo: number,
    pivot: {
        user_id: number,
        user_group_id: number
    }
}

export type User = {
    id: number,
    name: string,
    email: string,
    position: string,
    role: string,
    phone: null| string,
    online_status: null|string,
    avatar: null|string,
    chat_online_status: number
}


export type GetUserResponse = User[] | User


export const getUser = async (userId: number, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<User>('/users', {
        user_id: userId
    })
}

export type GetUserAction = typeof getUser;

export const getUsers = async (params: GetUsersRequest = {}, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<GetUserResponse>('/users', params);
}

export type GetUsersAction = typeof getUsers;
