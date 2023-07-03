import * as ads from './api/ads';
import * as analytics from './api/analytics';
import * as context from './api/context';
import * as iap from './api/iap';
import * as leaderboard from './api/leaderboard';
import * as notifications from './api/notifications';
import * as player from './api/player';
import * as session from './api/session';

module.exports = {
    /** Ads API */
    ads,
    /** Analytics API */
    analytics,
    /** Context API */
    context,
    /** In-App Purchasing API */
    iap,
    /** Leaderboard API */
    leaderboard,
    /** Notifications API */
    notifications,
    /** Player API */
    player,
    /** Session API */
    session,

    /**
     * Sets a callback which will be invoked when the app is brought to the background.
     * @param callback Callback to invoke.
     */
    onPause(callback) {
        window.Wortal.onPause(() => {
            callback();
        });
    },

    /**
     * Requests and performs haptic feedback on supported devices.
     * @returns {Promise<void>} Haptic feedback requested successfully
     * @throws {errorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * <li>INVALID_OPERATION</li>
     * </ul>
     */
    performHapticFeedbackAsync() {
        return window.Wortal.performHapticFeedbackAsync();
    },

    /**
     * Gets the supported APIs for the current platform.
     * @example
     * const supportedAPIs = wortal.getSupportedAPIs();
     * if (supportedAPIs.includes("context.shareAsync")) {
     *    shareWithFriendsDialog.show();
     * }
     * @returns {string[]} Array of supported APIs.
     */
    getSupportedAPIs() {
        return window.Wortal.getSupportedAPIs();
    }
}
