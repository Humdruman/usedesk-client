export declare type CreateCommentRequest = {
    cc?: string[];
    bcc?: string[];
    user_id?: number;
    type?: 'private' | 'public';
    files?: string[];
    from?: 'user' | 'client' | 'trigger';
    trigger_id?: string;
};
export declare type CreateCommentResponse = {
    status: string;
    comment_id: number;
};
export declare const createComment: (ticketId: number, message: string, params?: CreateCommentRequest) => Promise<CreateCommentResponse>;
