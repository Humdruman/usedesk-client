import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";



type GetChannelsResponse = Usedesk.Channel[];



export const getChannels = async (channelType?: Usedesk.ChannelType, dispatch: Dispatch = globalDispatch) => {
    const url = '/channels';
    const fullUrl = channelType ? `${url}?channel_type=${channelType}` : url
    return await dispatch<GetChannelsResponse>(fullUrl, {}, 'GET');
}

export type GetChannelsAction = typeof getChannels;
