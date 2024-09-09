module.exports = {
    /**
     * Returns whether ads are enabled for the current session. This can be used to determine if an alternative flow should
     * be used instead of showing ads.
     * @example
     * if (Wortal.ads.isEnabled()) {
     *    // Call ad
     *    // Or show rewarded ad button
     * }
     * @returns {boolean} True if ads are enabled for the current session. False if ads are disabled.
     */
    isEnabled() {
        return window.Wortal.ads.isEnabled();
    },
    /**
     * Returns whether ads are blocked for the current session. This can be used to determine if an alternative flow should
     * be used instead of showing ads, or prompt the player to disable the ad blocker.
     * @example
     * if (wortal.ads.isAdBlocked()) {
     *    // Show a message to the player to disable their ad blocker.
     *    // Or use an alternative flow that doesn't require ads - social invites for rewards as an example.
     * }
     * @returns {boolean} True if ads are blocked for the current session. False if ads are not blocked.
     */
    isAdBlocked() {
        return window.Wortal.ads.isAdBlocked();
    },

    /**
     * Shows an interstitial ad. These can be shown at various points in the game such as a level end, restart or a timed
     * interval in games with longer levels.
     * @example
     * // Player reached the next level.
     * wortal.ads.showInterstitial('next', 'NextLevel', pauseGame, resumeGame);
     *
     * // Player paused the game.
     * wortal.ads.showInterstitial('pause', 'PausedGame', pauseGame, resumeGame);
     *
     * // Player opened the IAP shop.
     * wortal.ads.showInterstitial('browse', 'BrowseShop', pauseAudio, resumeAudio);
     * @param {placement} placement Placement type for the ad.
     * @param {string} description Description of the placement.
     * @param {function} beforeAd Callback for before the ad is shown. Pause the game here.
     * @param {function} afterAd Callback for after the ad is shown. Resume the game here.
     * @param {function} noFill Callback for when the ad is not filled. This can happen if the platform has no ads to show or if the
     * rate limit has been reached. If this is not provided, the afterAd callback will be used.
     * @throws {errorMessage} See error.message for details.
     * <ul>
     * <li>INVALID_PARAM</li>
     * </ul>
     */
    showInterstitial(placement, description, beforeAd, afterAd, noFill) {
        window.Wortal.ads.showInterstitial(placement, description, beforeAd, afterAd, noFill);
    },

    /**
     * Shows a rewarded ad. These are longer, optional ads that the player can earn a reward for watching. The player
     * must be notified of the ad and give permission to show before it can be shown.
     * @example
     * // This example shows the game flow independent of the outcome of the ad.
     * // Ex: Player gets bonus coins for watching the ad, but the game continues regardless of the outcome.
     * wortal.ads.showRewarded('BonusCoins', pauseGame, resumeGame, skipBonus, addBonusCoins);
     *
     * // This example shows the game flow depending on the outcome of the ad.
     * // Ex: Player dies and can revive by watching an ad, but if they skip the ad they lose the level.
     * wortal.ads.showRewarded('ReviveAndContinue', pauseAudio, resumeAudio, endGame, continueGame);
     * @param {string} description Description of the placement.
     * @param {function} beforeAd Callback for before the ad is shown. Pause the game here.
     * @param {function} afterAd Callback for after the ad is shown. Resume the game here.
     * @param {function} adDismissed Callback for when the player dismissed the ad. Do not reward the player.
     * @param {function} adViewed Callback for when the player has successfully watched the ad. Reward the player here.
     * @param {function} noFill Callback for when the ad is not filled. This can happen if the platform has no ads to show or if the
     * rate limit has been reached. If this is not provided, the afterAd callback will be used.
     * @throws {errorMessage} See error.message for details.
     * <ul>
     * <li>INVALID_PARAM</li>
     * </ul>
     */
    showRewarded(description, beforeAd, afterAd, adDismissed, adViewed, noFill) {
        window.Wortal.ads.showRewarded(description, beforeAd, afterAd, adDismissed, adViewed, noFill);
    },

    /**
     * Shows a banner ad. These are small ads that are shown at the top or bottom of the screen. They are typically used
     * on menus or other non-gameplay screens. They can be shown or hidden at any time.
     * @param shouldShow Whether the banner should be shown or hidden. Default is show.
     * @param position Where the banner should be shown. Top or bottom of the screen. Default is the bottom.
     */
    showBanner(shouldShow, position) {
        window.Wortal.ads.showBanner(shouldShow, position);
    }
}
