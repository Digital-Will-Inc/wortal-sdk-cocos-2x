/**
 * @typedef invitePayload
 * Payload for context.inviteAsync. Defines the content to be sent in the invite.
 * @property {string} image Data URL of base64 encoded image to be displayed. This is required for the payload to be sent.
 * @property {string | localizableContent} text A text message, or an object with the default text as the value of 'default'
 * and another object mapping locale keys to translations as the value of 'localizations'.
 * @property {string | localizableContent | undefined} cta Text of the call-to-action button.
 * @property {string | localizableContent | undefined} dialogTitle An optional title to display at the top of the invite dialog instead of the generic title.
 * This param is not sent as part of the message, but only displays in the dialog header.
 * The title can be either a string or an object with the default text as the value of 'default' and another object
 * mapping locale keys to translations as the value of 'localizations'.
 *
 * PLATFORM NOTE: Facebook only.
 * @property {Record<string, unknown> | undefined} data Object passed to any session launched from this context message.
 * Its size must be <=1000 chars when stringified.
 * It can be accessed from `wortal.context.getEntryPointData()`
 * @property {inviteFilter[] | undefined} filters The set of filters to apply to the suggestions. Multiple filters may be applied. If no results are returned when
 * the filters are applied, the results will be generated without the filters.
 * @property {inviteSection[] | undefined} sections The set of sections to be included in the dialog. Each section can be assigned a maximum number of results to be
 * returned (up to a maximum of 10). If no max is included, a default max will be applied. Sections will be included
 * in the order they are listed in the array. The last section will include a larger maximum number of results, and
 * if a maxResults is provided, it will be ignored. If this array is left empty, default sections will be used.
 *
 * PLATFORM NOTE: Facebook only.
 */

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

/**
 * @typedef inviteSection
 * Represents a section in the inviteAsync dialog that contains suggested matches. The sections will be shown in the
 * order they are included in the array, and the last section will contain as many results as possible.
 * @property {inviteSectionType} sectionType The type of section to include in the inviteAsync dialog.
 * @property {number | undefined} maxResults Optional maximum number of results to include in the section. This can be no higher than 10. This will be
 * disregarded for the last section, which will contain as many results as possible. If not included, the default
 * maximum number of results for that section type will be used.
 */
