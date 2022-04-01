/**
 * @see https://guildedapi.com/resources/channel/#unfurl-embed-object
 */
export interface UnfurlEmbed {
    /**
     * The embed title.
     * @type {string}
     * @memberof UnfurlEmbed
     * @see https://guildedapi.com/resources/channel/#unfurl-embed-object
     */
    ogTitle: string;
    /**
     * The embed description.
     * @type {string}
     * @memberof UnfurlEmbed
     * @see https://guildedapi.com/resources/channel/#unfurl-embed-object
     */
    ogDescription: string;
    /**
     * The embed site name.
     * @type {string}
     * @memberof UnfurlEmbed
     * @see https://guildedapi.com/resources/channel/#unfurl-embed-object
     */
    ogSiteName: string;
    /**
     * The embed url.
     * @type {string}
     * @memberof UnfurlEmbed
     * @see https://guildedapi.com/resources/channel/#unfurl-embed-object
     */
    ogUrl: string;
    /**
     * The embed image url.
     * @type {string}
     * @memberof UnfurlEmbed
     * @see https://guildedapi.com/resources/channel/#unfurl-embed-object
     */
    ogImageUrl: string;
    /**
     * The embed site type.
     * @type {string}
     * @memberof UnfurlEmbed
     * @see https://guildedapi.com/resources/channel/#unfurl-embed-object
     */
    siteType: UnfurlEmbedSiteTypes;
}

export type UnfurlEmbedSiteTypes = 'facebook' | 'github' | 'guilded' | 'reddit' | 'twitch' | 'twitter' | 'vimeo' | 'youtube';