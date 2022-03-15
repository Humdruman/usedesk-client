import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";

type Group = Omit<Usedesk.UserGroup, 'pivot'> & {
    users: User[]
}

type User = Omit<Usedesk.User, 'chat_online_status'|'online_status'|'groups'> & {
    pivot: Usedesk.UserPivot
}

export type GetGroupsResponse = Group[];

export const getGroups = async (dispatch: Dispatch = globalDispatch) => {
    return await dispatch<GetGroupsResponse>('/groups');
}

export type GetGroupsAction = typeof getGroups;
