import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {MutateClientBody} from "./types";

interface UpdateClientResponse {
    client_id: number,
    status: boolean
}

export const updateClient = async (
    clientId: number,
    params: MutateClientBody = {},
    dispatch: Dispatch = globalDispatch
) => {
    return await dispatch<UpdateClientResponse>('/update/client', {client_id: `${clientId}`, ...params});
}

export type UpdateClientAction = typeof updateClient;
