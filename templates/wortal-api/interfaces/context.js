/**
 * @typedef localizableContent
 * Enable passing localizable content to API calls.
 * SDK will use the current player's locale for locale matching.
 * @property {string} default Text that will be used if a matching locale was not found.
 * @property {Record<string, string>} localizations Key value pairs of localized strings.
 */

/**
 * @typedef contextSizeResponse
 * Response from context.isSizeBetween API. Contains the answer and the min and max size.
 * @property {boolean} answer
 * @property {number} maxSize
 * @property {number} minSize
 */
