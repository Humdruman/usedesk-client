import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";

export interface GetTagsRequest {
    offset?: number,
    query?: string
}

export type GetTagsResponse = Usedesk.Tag[]

export const getTags = async (params: GetTagsRequest = {}, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<GetTagsResponse>('/tags', params)
}

export type GetTagsAction = typeof getTags;
