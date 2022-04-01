/**
 * @see https://guildedapi.com/resources/channel/#message-object
 */
export interface Message {
    /**
     * The message id.
     * @type {string}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    id: string;
    /**
     * The channel id.
     * @type {string}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    channelId: string;
    /**
     *  The message content.
     * @type {string}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    content: string;
    /**
     * The message created at.
     * @type {number}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    createdAt: number;
    /**
     * The message edited at.
     * @type {number}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    editedAt: number;
    /**
     * The message deleted at.
     * @type {number}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    deletedAt: number;
    /**
     * The message reactions.
     * @type {string[]}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    reactions: string[];
    /**
     * If pinned.
     * @type {boolean}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    isPinned: boolean;
    /** 
     * Pinned by.
     * @type {string}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    pinnedBy: string;
    /**
     * The webhook id.
     * @type {string}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    webhookId: string;
    /**
     * The message type.
     * @type {string}
     * @memberof Message
     * @see https://guildedapi.com/resources/channel/#message-object
     */
    type: string;
}

export type MessageType = 'default' | 'system'; 