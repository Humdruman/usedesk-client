import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";

export interface DeleteUserResponse {
    status: string,
    user_id: number
}

export const deleteUser = async (userId: number, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<DeleteUserResponse>('/delete/user', {user_id: userId});
}

export type DeleteUserAction = typeof deleteUser;
