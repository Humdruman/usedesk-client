import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";

export type GetUsersRequest = {
    user_type?: Usedesk.UserRole,
    group_id?: number,
    query?: string,
    user_id?: number
}


export type GetUserResponse = Usedesk.User[]


export const getUser = async (userId: number, dispatch: Dispatch = globalDispatch): Promise<Usedesk.User|undefined> => {
    const [user] = await dispatch<GetUserResponse>('/users', {
        user_id: userId
    })
    return user;
}

export type GetUserAction = typeof getUser;

export const getUsers = async (params: GetUsersRequest = {}, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<GetUserResponse>('/users', params);
}

export type GetUsersAction = typeof getUsers;
