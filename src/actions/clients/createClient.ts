import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {MutateClientBody} from "./types";

export interface CreateClientResponse  {
    client_id: number,
    status: boolean
}

export const createClient = async (params: MutateClientBody = {}, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<CreateClientResponse>('/create/client', params);
}

export type CreateClientAction = typeof createClient;
