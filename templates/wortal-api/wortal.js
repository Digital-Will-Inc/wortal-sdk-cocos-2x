import * as ads from './wortal-ads';
import * as analytics from './wortal-analytics';
import * as context from './wortal-context';
import * as iap from './wortal-iap';
import * as leaderboard from './wortal-leaderboard';
import * as player from './wortal-player';
import * as session from './wortal-session';

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
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * <li>INVALID_OPERATION</li>
     * </ul>
     */
    performHapticFeedbackAsync() {
        return window.Wortal.performHapticFeedbackAsync();
    }
}
