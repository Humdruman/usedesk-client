import {Usedesk} from "./Usedesk";

export namespace UsedeskTrigger {

    export interface Trigger {
        id: number,
        trigger_id: number|null,
        user_id: number|null,
        ticket_id: number,
        data: Target[],
        changed_at: Date,
        old_status: number,
        new_status: number,
        company_id: number
    }
    export interface Target {
        target: string,
        value?: string|number|null,
        old_value?: string|number|null
    }

    export interface SubjectTarget extends Target {
        target: 'subject',
        value: string
    }

    export interface TicketFieldTarget extends Target {
        target: 'ticket_field',
        value: string
    }

    export interface MessageFromClientTarget extends Target {
        target: 'message_from_client';
    }

    export interface MessageFromBotTarget extends Target {
        target: 'message_from_bot',
        value: string
    }

    export interface AssigneeTarget extends Target  {
        target: 'assignee_id';
        value: number
    }

    export interface StatusTarget extends Target {
        target: 'status_id',
        value: Usedesk.Status,
        old_value: Usedesk.Status
    }

    export interface NewTagsTarget extends Target {
        target: 'new_tags',
        value: string
    }

    export interface RemovedTagsTarget extends Target {
        target: 'removed_tags',
        value: string
    }

    export interface CommentFromAgentTarget extends Target {
        target: 'comment_from_agent',
        value: number
    }

    export interface SlaCloseTimeTarget extends Target {
        target: 'sla_close_time';
        value: number;
        sla_id: number
    }

    export interface SlaFirstReplyTime extends Target {
        target: 'sla_first_reply_time';
        value: number;
        sla_id: number
    }

    export interface TicketCreatedTarget extends Target {
        target: 'ticket_created',
        value: number
    }

    export const isTicketCreatedTarget = (t: unknown): t is TicketCreatedTarget => {
        return isTarget(t) && t.target === 'ticket_created'
    }

    export const IsSlaFirstReplyTime = (t: unknown): t is SlaFirstReplyTime => {
        return isTarget(t) && t.target === 'sla_first_reply_time'
    }

    export const isSlaCloseTimeTarget = (t: unknown): t is SlaCloseTimeTarget => {
        return isTarget(t) && t.target === 'sla_close_time'
    }


    export const isCommentFromAgentTarget = (t: unknown): t is CommentFromAgentTarget => {
        return isTarget(t) && t.target === 'comment_from_agent'
    }

    export const isRemovedTagsTarget = (t: unknown): t is RemovedTagsTarget => {
        return isTarget(t) && t.target === 'removed_tags'
    }

    export const isNewTagsTarget = (t: unknown): t is NewTagsTarget => isTarget(t) && t.target === 'new_tags';

    export const isStatusTarget = (t: unknown): t is StatusTarget => isTarget(t) && t.target === 'status_id'

    export const isMessageFromBotTarget = (t: unknown): t is MessageFromBotTarget => {
        return isTarget(t) && t.target === 'message_from_bot'
    }

    export const isAssigneeTarget = (t: unknown):t is AssigneeTarget => isTarget(t) && t.target === 'assignee_id';

    export const isMessageFromClientTarget = (t: unknown):t is MessageFromClientTarget => {
        return isTarget(t) && t.target === 'message_from_client'
    }
    export const isTicketFieldTarget = (t: unknown): t is TicketFieldTarget => {
        return  isTarget(t) && t.target === 'ticket_field'
    }
    export const isSubjectTarget = (t: unknown): t is SubjectTarget => isTarget(t) && t.target === 'subject';
    export const isTarget = (t: unknown): t is Target => typeof t === 'object' && t !== null && 'target' in t;
}

