import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";


export type CreateCommentRequest = {
    cc?: string[],
    bcc?: string[],
    user_id?: number,
    type?: Usedesk.MessageType,
    files?: Usedesk.Utils.UploadFile[],
    from?: Usedesk.SubjectType,
    trigger_id?: number
}


export type CreateCommentResponse = {
    status: string,
    comment_id: number
}

export const createComment = async (
    ticketId: number,
    message: string,
    params: CreateCommentRequest = {},
    dispatch: Dispatch = globalDispatch) => {
    return await dispatch<CreateCommentResponse>('/create/comment', Object.assign(params, {
        ticket_id: ticketId,
        message
    }))
}


export type CreateCommentAction = typeof createComment;
