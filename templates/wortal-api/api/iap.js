module.exports = {
    /**
     * Checks whether IAP is enabled in this session.
     * @example
     * const canShowShop = wortal.iap.isEnabled();
     * shopButton.visible = canShowShop;
     * @returns {boolean} True if IAP is available to the user. False if IAP is not supported on the current platform,
     * the player's device, or the IAP service failed to load properly.
     */
    isEnabled() {
        return window.Wortal.iap.isEnabled();
    },

    /**
     * Gets the catalog of available products the player can purchase.
     * @example
     * wortal.iap.getCatalogAsync()
     *  .then(products => console.log(products));
     * @returns {Promise<product[]>} Promise that resolves with an array of products available to the player.
     * Returns an empty array if purchases are not supported in the player's region.
     * @throws {errorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * <li>PAYMENTS_NOT_INITIALIZED</li>
     * <li>NETWORK_FAILURE</li>
     * </ul>
     */
    getCatalogAsync() {
        return window.Wortal.iap.getCatalogAsync();
    },

    /**
     * Fetches all the player's unconsumed purchases. The game should fetch the current player's purchases as soon as the
     * client indicates that it is ready to perform payments-related operations, i.e. at game start. The game can then
     * process and consume any purchases that are waiting to be consumed.
     * @example
     * wortal.iap.getPurchasesAsync()
     *  .then(purchases => console.log(purchases));
     * @returns {Promise<purchase[]>} Promise that resolves with an array of purchases that the player has made for the game.
     * @throws {errorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * <li>PAYMENTS_NOT_INITIALIZED</li>
     * <li>NETWORK_FAILURE</li>
     * </ul>
     */
    getPurchasesAsync() {
        return window.Wortal.iap.getPurchasesAsync();
    },

    /**
     * Begins the purchase flow for a specific product.
     * @example
     * wortal.iap.makePurchaseAsync({
     *     productID: 'my_product_123',
     * }).then(purchase => console.log(purchase));
     * @param {purchaseConfig} purchase The purchase's configuration details.
     * @returns {Promise<purchase>} Promise that resolves when the product is successfully purchased by the player. Otherwise, it rejects.
     * @throws {errorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * <li>PAYMENTS_NOT_INITIALIZED</li>
     * <li>INVALID_PARAM</li>
     * <li>NETWORK_FAILURE</li>
     * <li>INVALID_OPERATION</li>
     * <li>USER_INPUT</li>
     * </ul>
     */
    makePurchaseAsync(purchase) {
        return window.Wortal.iap.makePurchaseAsync(purchase);
    },

    /**
     * Consumes a specific purchase belonging to the current player. Before provisioning a product's effects to the player,
     * the game should request the consumption of the purchased product. Once the purchase is successfully consumed,
     * the game should immediately provide the player with the effects of their purchase. This will remove the
     * purchase from the player's available purchases inventory and reset its availability in the catalog.
     * @example
     * wortal.iap.consumePurchaseAsync('abc123');
     * @param {string} token The purchase token of the purchase that should be consumed.
     * @returns {Promise<void>} Promise that resolves when the purchase is successfully consumed. Otherwise, it rejects.
     * @throws {errorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * <li>PAYMENTS_NOT_INITIALIZED</li>
     * <li>INVALID_PARAM</li>
     * <li>NETWORK_FAILURE</li>
     * </ul>
     */
    consumePurchaseAsync(token) {
        return window.Wortal.iap.consumePurchaseAsync(token);
    }
}
