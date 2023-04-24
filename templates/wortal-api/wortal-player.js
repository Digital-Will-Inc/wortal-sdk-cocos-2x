module.exports = {
    /**
     * Gets the player's ID from the platform.
     * @example
     * wortal.player.getID(); // 'Player123ABC'
     * @returns {string | null} The player's ID.
     */
    getID() {
        return window.Wortal.player.getID();
    },

    /**
     * Gets the player's name on the platform.
     * @example
     * wortal.player.getName(); // 'Ragnar Lothbrok'
     * @returns {string | null} The player's name.
     */
    getName() {
        return window.Wortal.player.getName();
    },

    /**
     * Gets the player's photo from the platform.
     * @example
     * wortal.player.getPhoto(); // 'data:image/png;base64,iVBORw0KGgoAAAANSUh..' (base64 encoded image)
     * @returns {string | null} URL of base64 image for the player's photo.
     */
    getPhoto() {
        return window.Wortal.player.getPhoto();
    },

    /**
     * Checks whether this is the first time the player has played this game.
     * @example
     * if (wortal.player.isFirstPlay()) {
     *    // Show tutorial
     *    wortal.player.setDataAsync({ tutorialShown: true });
     * }
     * @returns {boolean} True if it is the first play. Some platforms always return true.
     */
    isFirstPlay() {
        return window.Wortal.player.isFirstPlay();
    },

    /**
     * Retrieve data from the designated cloud storage of the current player. Please note that JSON objects stored as
     * string values would be returned back as JSON objects.
     * @example
     * wortal.player.getDataAsync(['items', 'lives'])
     *  .then(data => {
     *      console.log(data['items]);
     *      console.log(data['lives']);
     *  });
     * @param {string[]} keys Array of keys for the data to get.
     * @returns {Promise<any>} A promise that resolves with an object which contains the current key-value pairs for each
     * key specified in the input array, if they exist.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>INVALID_PARAM</li>
     * <li>NETWORK_FAILURE</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * </ul>
     */
    getDataAsync(keys) {
        return window.Wortal.player.getDataAsync(keys);
    },

    /**
     * Set data to be saved to the designated cloud storage of the current player. The game can store up to 1MB of data
     * for each unique player.
     * @example
     * wortal.player.setDataAsync({
     *     items: {
     *         coins: 100,
     *         boosters: 2
     *     },
     *     lives: 3,
     * });
     * @param {Record<string, unknown>} data An object containing a set of key-value pairs that should be persisted to
     * cloud storage. The object must contain only serializable values - any non-serializable values will cause the
     * entire modification to be rejected.
     * @returns {Promise<void>} A promise that resolves when the input values are set. NOTE: The promise resolving does not
     * necessarily mean that the input has already been persisted. Rather, it means that the data was valid and has been
     * scheduled to be saved. It also guarantees that all values that were set are now available in player.getDataAsync.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>INVALID_PARAM</li>
     * <li>NETWORK_FAILURE</li>
     * <li>PENDING_REQUEST</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * </ul>
     */
    setDataAsync(data) {
        return window.Wortal.player.setDataAsync(data);
    },

    /**
     * Flushes any unsaved data to the platform's storage. This function is expensive, and should primarily be used for
     * critical changes where persistence needs to be immediate and known by the game. Non-critical changes should rely on
     * the platform to persist them in the background.
     * NOTE: Calls to player.setDataAsync will be rejected while this function's result is pending.
     * @example
     * wortal.player.flushDataAsync()
     *  .then(() => console.log("Data flushed."));
     * @returns {Promise<void>} A promise that resolves when changes have been persisted successfully, and rejects if the save fails.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>INVALID_PARAM</li>
     * <li>NETWORK_FAILURE</li>
     * <li>PENDING_REQUEST</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * </ul>
     */
    flushDataAsync() {
      return window.Wortal.player.flushDataAsync();
    },

    /**
     * Fetches an array of ConnectedPlayer objects containing information about active players (people who played the game
     * in the last 90 days) that are connected to the current player.
     * @example
     * wortal.player.getConnectedPlayersAsync({
     *     filter: 'ALL',
     *     size: 20,
     *     hoursSinceInvitation: 4,
     * }).then(players => console.log(players.length);
     * @param {connectedPlayerPayload} payload Options for the friends to get.
     * @returns {Promise<wortalPlayer[]>} A promise that resolves with a list of connected player objects.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>NETWORK_FAILURE</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * </ul>
     */
    getConnectedPlayersAsync(payload) {
        return window.Wortal.player.getConnectedPlayersAsync(payload);
    },

    /**
     * Gets a signed player object that includes the player ID and signature for validation. This can be used to
     * send something to a backend server for validation, such as game or purchase data.
     * @example
     * wortal.player.getSignedPlayerInfoAsync()
     *  .then(info => {
     *      myServer.validate(
     *          info.id,
     *          info.signature,
     *          gameDataToValidate,
     *      )
     *  });
     * @returns {Promise<object>} A promise that resolves with an object containing the player ID and signature.
     * @see Signature
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>INVALID_PARAM</li>
     * <li>NETWORK_FAILURE</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * </ul>
     */
    getSignedPlayerInfoAsync() {
        return window.Wortal.player.getSignedPlayerInfoAsync();
    },

    /**
     * A unique identifier for the player. This is the standard Facebook Application-Scoped ID which is used for all Graph
     * API calls. If your game shares an AppID with a native game this is the ID you will see in the native game too.
     * @example
     * wortal.player.getASIDAsync()
     * .then(asid => console.log("Player ASID: " + asid));
     * @returns {Promise<string>} A unique identifier for the player. String is nullable.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>RETHROW_FROM_PLATFORM</li>
     * </ul>
     */
    getASIDAsync() {
        return window.Wortal.player.getASIDAsync();
    },

    /**
     * A unique identifier for the player. This is the standard Facebook Application-Scoped ID which is used for all Graph
     * API calls. If your game shares an AppID with a native game this is the ID you will see in the native game too.
     * @example
     * wortal.player.getSignedASIDAsync()
     *  .then(info => {
     *     myServer.validate(
     *     info.asid,
     *     info.signature,
     *     );
     *   });
     * @returns {Promise<signedASID>} Object with player ASID and signature.
     * @see SignedASID
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>RETHROW_FROM_PLATFORM</li>
     * </ul>
     */
    getSignedASIDAsync() {
        return window.Wortal.player.getSignedASIDAsync();
    },

    /**
     * Checks if the current user can subscribe to the game's bot.
     * @example
     * wortal.player.canSubscribeBotAsync()
     * .then(canSubscribe => console.log("Can subscribe to bot: " + canSubscribe));
     * @returns {Promise<boolean>} Whether a player can subscribe to the game bot or not. Developer can only call
     * subscribeBotAsync() after checking canSubscribeBotAsync(), and the game will only be able to show the player their
     * bot subscription dialog once per week.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>RATE_LIMITED</li>
     * <li>INVALID_OPERATION</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * </ul>
     */
    canSubscribeBotAsync() {
        return window.Wortal.player.canSubscribeBotAsync();
    },

    /**
     * Request that the player subscribe the bot associated to the game. The API will reject if the subscription fails -
     * else, the player will subscribe the game bot.
     * @example
     * wortal.player.subscribeBotAsync()
     * .then(() => console.log("Player subscribed to bot"));
     * @returns {Promise<void>} A promise that resolves if player successfully subscribed to the game bot, or rejects if
     * request failed or player chose to not subscribe.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>INVALID_PARAM</li>
     * <li>PENDING_REQUEST</li>
     * <li>CLIENT_REQUIRES_UPDATE</li>
     * </ul>
     */
    subscribeBotAsync() {
        return window.Wortal.player.subscribeBotAsync();
    }

    /**
     * @typedef wortalPlayer
     * @property {string} id Player's ID
     * @property {string} name Player's name
     * @property {string} photo URL to player's photo
     */

    /**
     * @typedef connectedPlayerPayload
     * @property {number | undefined} cursor
     * @property {connectedPlayerFilter | undefined} filter
     * @property {number | undefined} hoursSinceInvitation
     * @property {number | undefined} size
     */

    /**
     * @typedef connectedPlayerFilter
     * 'ALL' | 'INCLUDE_PLAYERS' | 'INCLUDE_NON_PLAYERS' | 'NEW_INVITATIONS_ONLY'
     */

    /**
     * @typedef signedASID
     * @property {string} asid The ID of the player
     * @property {string} signature
     * A signature to verify this object indeed comes from Facebook. The string is base64url encoded and signed with an
     * HMAC version of your App Secret, based on the OAuth 2.0 spec.
     *
     * You can validate it with the following 4 steps:
     *
     * - Split the signature into two parts delimited by the '.' character.
     * - Decode the first part (the encoded signature) with base64url encoding.
     * - Decode the second part (the response payload) with base64url encoding, which should be a string representation of a JSON object that has the following fields: ** algorithm - always equals to HMAC-SHA256 ** issued_at - a unix timestamp of when this response was issued. ** asid - the app-scoped user id of the player.
     * - Hash the whole response payload string using HMAC SHA-256 and your app secret and confirm that it is equal to the encoded signature.
     * - You may also wish to validate the issued_at timestamp in the response payload to ensure the request was made recently.
     *
     * Signature validation should only happen on your server. Never do it on the client side as it will compromise your app secret key.
     */
}