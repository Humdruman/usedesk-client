import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";



interface UserBody {
    name: string,
    email: string,
    password: string,
    group: number,
    role?: Usedesk.UserRole,
    phone?: string,
    avatar?: Usedesk.Utils.UploadFile
}

interface UserResponse {
    status: string,
    user_id: number
}


export const createUser = async  (user: UserBody, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<UserResponse>('/create/user', user)
}

export type CreateUserAction = typeof createUser;
