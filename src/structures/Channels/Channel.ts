/**
 * @see https://guildedapi.com/resources/channel/#channel-object
 */
export interface Channel {
    /**
     * The ID of the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */
    id: string;
    /**
     * The type of the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */
    type: string;
    /**
     * The creation date of the channel.
     * @type {string}
     * @memberof Channel
     * @example "2020-01-01T00:00:00.000Z"
    */
    createdAt: number;
    /**
     * The Update date of the channel.
     * @type {string}
     * @memberof Channel
     * @example "2020-01-01T00:00:00.000Z"
     */
    updatedAt: number;
    /**
     * The name of the channel.
     * @type {string}
     * @memberof Channel
     * @example "General"
     */
    name: string;
    /**
     * The content type of the channel.
     * @type {string}
     * @memberof Channel
     * @example "text"
     */
    contentType: string;
    /**
     * The archived date of the channel.
     * @type {number}
     * @memberof Channel
     * @example "2020-01-01T00:00:00.000Z"
     */
    archivedAt: number;
    /**
     * The parent id of the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */
    parentChannelId: string;
    /**
     * The auto-archive date of the channel.
     * @type {number}
     * @memberof Channel
     * @example "2020-01-01T00:00:00.000Z"
     */ 
    autoArchiveAt: number;
    /**
     * The deleted date of the channel.
     * @type {number}
     * @memberof Channel
     * @example "2020-01-01T00:00:00.000Z"
     */ 
    deletedAt: number;
    /**
     * User of who archived the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    archivedBy: string;
    /**
     * The channel's description.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    description: string;
    /**
     * The webhook id in the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    createByWebhookId: string;
    /**
     * The archive from webhook id in the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    archivedByWebhookId: string;
    /**
     * Team of the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    teamId: string;
    /**
     * Channel Category id of the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    channelCategoryId: string;
    /**
     * The channel Add date.
     * @type {string}
     * @memberof Channel
     * @example "2020-01-01T00:00:00.000Z"
     */ 
    addedAt: number;
    /**
     * The channel id.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    channelId: string;
    /**
     * If the role is synced.
     * @type {boolean}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    isRoleSync: boolean;
    /**
     * Roles in the channel.
     * @type {string[]}
     * @memberof Channel
     * @example ["role1", "role2"]
     */ 
    roles: string[];
    /**
     * User Permissions in the channel.
     * @type {string[]}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    userPermissions: string[];
    /**
     * Tournament Roles in the channel.
     * @type {string[]}
     * @memberof Channel
     * @example ["role1", "role2"]
     */ 
    tournamentRoles: string[];
    /**
     * If public.
     * @type {boolean}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    isPublic: boolean;
    /**
     * Channel priority.
     * @type {number}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    prioirity: number;
    /**
     * Group id of the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    groupId: string;
    /**
     * Settings
     * @type {ChannelSettings}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */
    settings: null
    /**
     * Group type of the channel.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    groupType: string;
    /**
     * Roles by id.
     * @type {string[]}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    rolesByID: {
        [key: string]: any
    };
    /**
     * Tournament Roles by id.
     * @type {string[]}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    tournamentRolesById: {
        [key: string]: any
    };
    /**
     * Created by info.
     * @type {string}
     * @memberof Channel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */ 
    createdByInfo: {
        id: string;
        name: string;
        proFilePicture: string;
    };
}

export interface DMChannel {
    /**
     * The channel id.
     * @type {string}
     * @memberof DMChannel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */
    id: string;
    /**
     * The channel type.
     * @type {string}
     * @memberof DMChannel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */
    name: string;
    /**
     * The channel name.
     * @type {string}
     * @memberof DMChannel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */
    description: string;
    /**
     * The chanenl description.
     * @type {string}
     * @memberof DMChannel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */
    users: string[];
    /**
     * The users in the channel.
     * @type {string[]}
     * @memberof DMChannel
     * @see https://guildedapi.com/resources/channel/#channel-object
     */
    createdAt: number;
    /**
     * The channel created at.
     * @type {number}
     * @memberof DMChannel
     * @example "2020-01-01T00:00:00.000Z"
     */

} 

export type ChannelType = 'Team' | 'DM';

export type ChannelContentTypes = 'announcement' | 'chat' | 'doc' | 'forum' | 'media' | 'list' | 'scheduling' | 'streaming' | 'voice';
