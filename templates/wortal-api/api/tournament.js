module.exports = {
    /**
     * Fetch the tournament out of the current context the user is playing. This will reject if there is no
     * tournament linked to the current context. The tournament returned can be either active or expired
     * (A tournament is expired if its end time is in the past). For each tournament, there is only one unique context
     * ID linked to it, and that ID doesn't change.
     * @example
     * wortal.tournament.getCurrentAsync()
     * .then(tournament => {
     *     console.log(tournament.id);
     *     console.log(tournament.endTime);
     * });
     * @returns {Promise<Tournament>} Promise that resolves with the current tournament.
     * Rejects if there is no tournament linked to the current context.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>PENDING_REQUEST</li>
     * <li>NETWORK_FAILURE</li>
     * <li>INVALID_OPERATION</li>
     * <li>TOURNAMENT_NOT_FOUND</li>
     * <li>NOT_SUPPORTED</li>
     */
    getCurrentAsync() {
        return window.Wortal.tournament.getCurrentAsync();
    },

    /**
     * Returns a list of eligible tournaments that can be surfaced in-game, including tournaments:
     *
     * - The player has created
     * - The player is participating in
     * - The player's friends (who granted permission) are participating in
     *
     * The tournaments returned are active. A tournament is expired if its end time is in the past.
     * For each tournament, there is only one unique context ID linked to it, and that ID doesn't change.
     * @example
     * wortal.tournament.getAllAsync()
     *  .then(tournaments => console.log(tournaments.length));
     * @returns {Promise<Tournament[]>} Promise that resolves with an array of active tournaments.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NETWORK_FAILURE</li>
     * <li>INVALID_OPERATION</li>
     * <li>NOT_SUPPORTED</li>
     */
    getAllAsync() {
        return window.Wortal.tournament.getAllAsync();
    },

    /**
     * Posts a player's score. This API should only be called within a tournament context at the end of an
     * activity (example: when the player doesn't have "lives" to continue the game). This API will be rate-limited when
     * called too frequently. Scores posted using this API should be consistent and comparable across game sessions.
     * For example, if Player A achieves 200 points in a session, and Player B achieves 320 points in a session, those
     * two scores should be generated from activities where the scores are fair to be compared and ranked against each other.
     * @example
     * wortal.tournament.postScoreAsync(200)
     *  .then(() => console.log("Score posted!"));
     * @param score An integer value representing the player's score at the end of an activity.
     * @returns {Promise<void>} Promise that resolves when the score is posted.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>INVALID_PARAM</li>
     * <li>TOURNAMENT_NOT_FOUND</li>
     * <li>NETWORK_FAILURE</li>
     * <li>NOT_SUPPORTED</li>
     * </ul>
     */
    postScoreAsync(score) {
        return window.Wortal.tournament.postScoreAsync(score);
    },

    /**
     * Opens the tournament creation dialog if the player is not currently in a tournament session.
     * @example
     * // Create a tournament for a specific level.
     * const payload = {
     *     initialScore: 100,
     *     config: {
     *      title: "Level 1 Tournament",
     *     },
     *     data: {
     *      level: 1,
     *     },
     * };
     *
     * wortal.tournament.createAsync(payload)
     *  .then(tournament => console.log(tournament.payload["level"]));
     * @param payload Payload that defines the tournament configuration.
     * @returns {Promise<Tournament>} Promise that resolves with the created tournament.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>INVALID_PARAM</li>
     * <li>INVALID_OPERATION</li>
     * <li>NETWORK_FAILURE</li>
     * <li>DUPLICATE_POST</li>
     * <li>NOT_SUPPORTED</li>
     * </ul>
     */
    createAsync(payload) {
        return window.Wortal.tournament.createAsync(payload);
    },

    /**
     * Opens the share tournament dialog if the player is currently in a tournament session.
     * @example
     * wortal.tournament.shareAsync({
     *   score: 3,
     *   data: { myReplayData: '...' }
     * });
     * @param payload Specifies share content.
     * @returns {Promise<void>} Promise that resolves if the tournament is shared, or rejects otherwise.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>INVALID_OPERATION</li>
     * <li>TOURNAMENT_NOT_FOUND</li>
     * <li>NETWORK_FAILURE</li>
     * <li>NOT_SUPPORTED</li>
     */
    shareAsync(payload) {
        return window.Wortal.tournament.shareAsync(payload);
    },

    /**
     * Request a switch into a specific tournament context. If the player is not a participant of the tournament, or there
     * are not any connected players participating in the tournament, this will reject. Otherwise, the promise will resolve
     * when the game has switched into the specified context.
     * @example
     * wortal.tournament.joinAsync("1234567890")
     *  .then(() => console.log("Switched into tournament!"));
     * @param tournamentID ID of the desired tournament context to switch into.
     * @returns {Promise<void>} Promise that resolves when the game has switched into the specified tournament context, or rejects otherwise.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>INVALID_PARAM</li>
     * <li>INVALID_OPERATION</li>
     * <li>TOURNAMENT_NOT_FOUND</li>
     * <li>SAME_CONTEXT</li>
     * <li>NETWORK_FAILURE</li>
     * <li>USER_INPUT</li>
     * <li>NOT_SUPPORTED</li>
     */
    joinAsync(tournamentID) {
        return window.Wortal.tournament.joinAsync(tournamentID);
    }
}
