import * as achievements from './api/achievements';
import * as ads from './api/ads';
import * as analytics from './api/analytics';
import * as context from './api/context';
import * as iap from './api/iap';
import * as leaderboard from './api/leaderboard';
import * as notifications from './api/notifications';
import * as player from './api/player';
import * as session from './api/session';
import * as stats from './api/stats';
import * as tournament from './api/tournament';

module.exports = {
    /** Achievements API */
    achievements,
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
    /** Stats API */
    stats,
    /** Tournament API */
    tournament,

    /**
     * Returns true if the SDK Core has been initialized.
     */
    isInitialized()
    {
        return window.Wortal.isInitialized;
    },

    /**
     * Initializes the SDK. This should be called before any other SDK functions. It is recommended to call this
     * as soon as the script has been loaded to shorten the initialization time.
     *
     * NOTE: This is only available if the manual initialization option is set to true. Otherwise, the SDK will initialize automatically.
     *
     * PLATFORM NOTE: Only supported on Viber, Link and Facebook.
     * @example
     * wortal.initializeAsync().then(() => {
     *    // SDK is ready to use, wait for game to finish loading.
     *    wortal.setLoadingProgress(100);
     *    wortal.startGameAsync();
     * });
     * @returns {Promise<void>} Promise that resolves when the SDK initialized successfully.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>INITIALIZATION_ERROR</li>
     * <li>NOT_SUPPORTED</li>
     * </ul>
     */
    initializeAsync()
    {
        return window.Wortal.initializeAsync();
    },

    /**
     * This indicates that the game has finished initial loading and is ready to start. Context information will be
     * up-to-date when the returned promise resolves. The loading screen will be removed after this is called along with
     * the following conditions:
     * <ul>
     * <li>initializeAsync has been called and resolved</li>
     * <li>setLoadingProgress has been called with a value of 100</li>
     * </ul>
     *
     * NOTE: This is only available if the manual initialization option is set to true. Otherwise, the game will start automatically.
     *
     * PLATFORM NOTE: Only supported on Viber, Link and Facebook.
     * @example
     * wortal.startGameAsync().then(() => {
     *    // Game is rendered to player.
     * });
     * @returns {Promise<void>} Promise that resolves when the game has started successfully.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>INITIALIZATION_ERROR</li>
     * <li>NOT_SUPPORTED</li>
     * </ul>
     */
    startGameAsync()
    {
        return window.Wortal.startGameAsync();
    },

    /**
     * Sets the loading progress value for the game. This is required for the game to start. Failure to call this with 100
     * once the game is fully loaded will prevent the game from starting.
     * @example
     * onGameLoadProgress(percent) {
     *     wortal.setLoadingProgress(percent);
     * }
     *
     * onGameLoaded() {
     *     wortal.setLoadingProgress(100);
     * }
     * @param value Percentage of loading complete. Range is 0 to 100.
     */
    setLoadingProgress(value)
    {
        window.Wortal.setLoadingProgress(value);
    },

    /**
     * Sets a callback which will be invoked when the app is brought to the background.
     * @param callback Callback to invoke.
     */
    onPause(callback)
    {
        window.Wortal.onPause(() =>
        {
            callback();
        });
    },

    /**
     * Sets a callback which will be invoked when the app is brought to the foreground.
     * @param callback Callback to invoke.
     */
    onResume(callback)
    {
        window.Wortal.onResume(() =>
        {
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
    performHapticFeedbackAsync()
    {
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
    getSupportedAPIs()
    {
        return window.Wortal.getSupportedAPIs();
    }
}
