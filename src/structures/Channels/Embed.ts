/**
 * @see https://guildedapi.com/resources/channel/#embed-object
 */
export interface Embed {
    /**
     * The embed title.
     * @type {string}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     */
    title?: string;
    /**
     * The embed description.
     * @type {string}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     */
    description?: string;
    /**
     * The embed url.
     * @type {string}
     * @memberof Embed
     * @example https://guilded.gg/  
     */
    url?: string;
    /**
     * The embed timestamp.
     * @type {number}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     */
    timestamp?: number;
    /**
     * The embed color.
     * @type {number}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     */
    color?: number;
    /**
     * The embed footer.
     * @type {EmbedFooter}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     */
    footer?: EmbedFooter;
    /**
     * The embed image.
     * @type {EmbedImage}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     */
    image?: EmbedImage;
    /**
     * The embed thumbnail.
     * @type {EmbedThumbnail}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     */
    thumbnail?: EmbedThumbnail;   
    /**
     * The embed video.
     * @type {EmbedVideo}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     */
    video?: EmbedVideo;
    /**
     * The embed provider.
     * @type {EmbedProvider}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     * @example {
     *  name?: 'Guilded',
     * url?: 'https://guilded.gg/' 
     */
    provider?: EmbedProvider;
    /**
     * The embed author.
     * @type {EmbedAuthor}
     * @memberof Embed
     * @see https://guildedapi.com/resources/channel/#embed-object
     * @example {
     * name?: 'Guilded',
     * url?: 'https://guilded.gg/'
     * iconUrl?: 'https://guilded.gg/assets/img/favicon.png'
     * icon_url?: 'https://guilded.gg/assets/img/favicon.png'
     */
    author?: EmbedAuthor;
    /**
     * The embed fields.
     * @type {EmbedField[]}
     * @memberof Embed
     * @example [
     * {
     * name: 'Guilded',
     * value: 'https://guilded.gg/',
     * inline: true
     * }    
     */
    fields?: EmbedField[]; 
}

export interface EmbedFooter {
    /**
     * The embed footer text.
     * @type {string}
     * @memberof EmbedFooter
     * @see https://guildedapi.com/resources/channel/#embed-footer-structure
     */
    text: string;
    /**
     * The embed footer icon url.
     * @type {string}
     * @memberof EmbedFooter
     * @see https://guildedapi.com/resources/channel/#embed-footer-structure
     */
    iconUrl?: string;
    /**
     * The embed footer icon url.
     * @type {string}
     * @memberof EmbedFooter
     * @see https://guildedapi.com/resources/channel/#embed-footer-structure
     */
    icon_url?: string;   
}

export interface EmbedImage {
    /**
     * The embed image url.
     * @type {string}
     * @memberof EmbedImage
     * @see https://guildedapi.com/resources/channel/#embed-image-structure
     */
    url?: string;
    /**
     * The image height.
     * @type {number}
     * @memberof EmbedImage
     * @see https://guildedapi.com/resources/channel/#embed-image-structure
     */
    height?: number;
    /**
     * The image width.
     * @type {number}
     * @memberof EmbedImage
     * @see https://guildedapi.com/resources/channel/#embed-image-structure
     */
    width?: number; 
}

export interface EmbedThumbnail {
    /**
     * The embed thumbnail url.
     * @type {string}
     * @memberof EmbedThumbnail
     * @see https://guildedapi.com/resources/channel/#embed-thumbnail-structure
     */
    url?: string;
    /**
     * The thumbnail height.
     * @type {number}
     * @memberof EmbedThumbnail
     * @see https://guildedapi.com/resources/channel/#embed-thumbnail-structure
     */
    height?: number;
    /**
     * The thumbnail width.
     * @type {number}
     * @memberof EmbedThumbnail
     * @see https://guildedapi.com/resources/channel/#embed-thumbnail-structure
     */
    width?: number;
}

export interface EmbedVideo {
    /**
     * The embed video url.
     * @type {string}
     * @memberof EmbedVideo
     * @see https://guildedapi.com/resources/channel/#embed-video-structure
     */
    url?: string;
    /**
     * The video height.
     * @type {number}
     * @memberof EmbedVideo
     * @see https://guildedapi.com/resources/channel/#embed-video-structure
     */
    height?: number;
    /**
     * The video width.
     * @type {number}
     * @memberof EmbedVideo
     * @see https://guildedapi.com/resources/channel/#embed-video-structure
     */
    width?: number;
}

export interface EmbedProvider {
    /**
     * The embed provider name.
     * @type {string}
     * @memberof EmbedProvider
     * @see https://guildedapi.com/resources/channel/#embed-provider-structure
     */
    name?: string;
    /**
     * The embed provider url.
     * @type {string}
     * @memberof EmbedProvider
     * @see https://guildedapi.com/resources/channel/#embed-provider-structure
     */
    url?: string;
}

export interface EmbedAuthor {
    /**
     * The embed author name.
     * @type {string}
     * @memberof EmbedAuthor
     * @see https://guildedapi.com/resources/channel/#embed-author-structure
     */
    name?: string;
    /**
     * The embed author url.
     * @type {string}
     * @memberof EmbedAuthor
     * @see https://guildedapi.com/resources/channel/#embed-author-structure
     */
    url?: string;
    /**
     * The embed author icon url.
     * @type {string}
     * @memberof EmbedAuthor
     * @see https://guildedapi.com/resources/channel/#embed-author-structure
     */
    iconUrl?: string;
    /**
     * The embed author icon url.
     * @type {string}
     * @memberof EmbedAuthor
     * @see https://guildedapi.com/resources/channel/#embed-author-structure
     */
    icon_url?: string;
}

export interface EmbedField {
    /**
     * The embed field name.
     * @type {string}
     * @memberof EmbedField
     * @see https://guildedapi.com/resources/channel/#embed-field-structure
     */
    name: string;
    /**
     * The embed field value.
     * @type {string}
     * @memberof EmbedField
     * @see https://guildedapi.com/resources/channel/#embed-field-structure
     */
    value: string;
    /**
     * Whether the embed field is inline.
     * @type {boolean}
     * @memberof EmbedField
     * @see https://guildedapi.com/resources/channel/#embed-field-structure
     */
    inline?: boolean;
}   