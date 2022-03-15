import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";



export interface UpdateUserRequest {
    name?: string,
    email?: string,
    role?: Usedesk.UserRole,
    group?: number,
    phone?: string,
    chat_online_status?: boolean,
    ticket_online_status?: boolean,
    avatar?: Usedesk.Utils.UploadFile | 'delete'
}

export interface UpdateUserResponse {
    status_id: string,
    user_id: number
}

export const updateUser = async (
    userId: number,
    params: UpdateUserRequest = {},
    dispatch: Dispatch = globalDispatch
) => {
    return await dispatch<UpdateUserResponse>('/update/user', {user_id: userId, ...params})
}


export type UpdateUserAction = typeof updateUser;
