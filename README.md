# Wortal SDK for Cocos Creator 2.x

## Installation

- Install the extension from the [Cocos Store](https://store.cocos.com/app/en/detail/4149).

### Building
To use the <b>Wortal SDK</b> in your game, you must build with the <b>web-mobile</b> template.  This is included in the
extension and handles all the necessary setup.

## Initialization

1. Call `wortal.initializeAsync()` as early as possible in your game's initialization code, then `wortal.startGameAsync()`
   when your game has finished loading and is ready for play.

2. Report the loading progress of the game in your initialization code. The game will not start until the loading progress reaches 100%.

```javascript
wortal.initializeAsync().then(() => {
    // SDK is ready to use.
    // Wait for game to finish loading.
    wortal.setLoadingProgress(100);
    wortal.startGameAsync();
});
```

## How to Use

### Ads

[API Reference](https://docs.games-api.ai/api/ads/)

Interstitial ads can be shown at various points in the game such as a level end, restart or a timed
interval in games with longer levels.

```javascript
// Player reached the next level.
wortal.ads.showInterstitial('next', 'NextLevel', pauseGame, resumeGame);

// Player paused the game.
wortal.ads.showInterstitial('pause', 'PausedGame', pauseGame, resumeGame);

// Player opened the IAP shop.
wortal.ads.showInterstitial('browse', 'BrowseShop', pauseAudio, resumeAudio);
```

Rewarded ads can be shown too. These are longer, optional ads that the player can earn a reward for watching. The player
must be notified of the ad and give permission to show before it can be shown.

```javascript
// This example shows the game flow independent of the outcome of the ad.
// Ex: Player gets bonus coins for watching the ad, but the game continues regardless of the outcome.
wortal.ads.showRewarded('BonusCoins', pauseGame, resumeGame, skipBonus, addBonusCoins);

// This example shows the game flow depending on the outcome of the ad.
// Ex: Player dies and can revive by watching an ad, but if they skip the ad they lose the level.
wortal.ads.showRewarded('ReviveAndContinue', pauseAudio, resumeAudio, endGame, continueGame);
```

**NOTE**: Players should only be rewarded in the `adViewed` callback.

### Analytics

[API Reference](https://docs.games-api.ai/api/analytics/)

The Analytics API can be used to track game events that can help better understand how players are interacting with
the game. This data will be available for viewing in the Wortal dashboard.

```javascript
// Logs the start of the level.
wortal.analytics.logLevelStart('Level 3');

// Logs the end of the level. Will track the time spent playing the level if the name matches
// the name of the last logLevelStart() call.
wortal.analytics.logLevelEnd('Level 3', '100', true);

// Logs a choice the player made in the game. This can be useful for balancing the game
// and seeing what content your players interact with the most.
wortal.analytics.logGameChoice('Character', 'Blue');
```

### Achievements

[API Reference](https://docs.games-api.ai/api/achievements/)

The Achievements API is used to track the player's progress in the game and reward them for completing tasks.

```javascript
// Unlock an achievement.
wortal.achievements.unlockAchievementAsync('achievementID')
    .then(() => console.log("Achievement unlocked!"));

// Get the player's achievements progress.
wortal.achievements.getAchievementsAsync()
    .then(achievements => console.log(achievements));
```

### Context

[API Reference](https://docs.games-api.ai/api/context/)

The Context API is used to connect players and allow them to interact in the game session, share their content
and send messages to each other.

```javascript
// Invite a friend to play the game. Does not switch the player's current context.
wortal.context.inviteAsync({
    image: 'data:base64Image',
    text: 'Invite text',
    cta: 'Play',
    data: { exampleData: 'yourData' },
}).then(() => console.log("Invite sent!"))

// Share your game activity with friends.
wortal.context.shareAsync({
    image: 'data:base64image',
    text: 'Share text',
    cta: 'Play',
    data: { exampleData: 'yourData' },
}).then(result => console.log(result)); // Contains shareCount with number of friends the share was sent to.
```

### In-App Purchases

[API Reference](https://docs.games-api.ai/api/iap/)

The In-App Purchases (IAP) API is used to provide an interface for in-game transactions on the platforms.
This process will differ based on what platform the game is being played on, but the API remains the same.

```javascript
// Get the catalog of products the player can purchase.
wortal.iap.getCatalogAsync()
    .then(products => console.log(products));

// Purchase a product.
wortal.iap.makePurchaseAsync({
    productID: 'my_product_123',
}).then(purchase => console.log(purchase));
```

### Leaderboards

[API Reference](https://docs.games-api.ai/api/leaderboard/)

The Leaderboard API gives the game access to the platform's leaderboard functionality. This is where
you can track player's scores and compare them to other players.

```javascript
// Get the top 10 entries on the global leaderboard.
wortal.leaderboard.getEntriesAsync('global', 10)
    .then(entries => console.log(entries));

// Add the player's score to the leaderboard.
wortal.leaderboard.sendEntryAsync('global', 100);
```

### Notifications

[API Reference](https://docs.games-api.ai/api/notifications/)

The Notifications API is used to send notifications to the player. These can be used to notify the player
of an event in the game or to remind them to come back and play.

```javascript
// Schedule a notification to send to the player.
wortal.notifications.scheduleAsync({
    title: "Your energy is full!",
    body: "Come back and play again.",
    mediaURL: "https://example.com/image.png",
    label: "resources-full",
    scheduleInterval: 300 // 5 minutes
}).then((result) => {
    console.log(result.id);
});

// Cancel a scheduled notification.
wortal.notifications.cancelAsync('notification-id-123')
    .then((result) => {
        console.log(result);
    });
```

### Player

[API Reference](https://docs.games-api.ai/api/player/)

You can find details about the current player via the Player API.

```javascript
// Get the player's name.
wortal.player.getName();

// Get a list of the player's friends who have also played this game.
wortal.player.getConnectedPlayersAsync({
    filter: 'ALL',
    size: 20,
    hoursSinceInvitation: 4,
}).then(players => console.log(players.length));
```

### Session

[API Reference](https://docs.games-api.ai/api/session/)

Details about the current session can be accessed in the Session API.

```javascript
// Get the entry point of where the game started from.
wortal.session.getEntryPointAsync()
 .then(entryPoint => console.log(entryPoint));


// Get the entry point data from a social invite or share.
// This is useful for tracking where players are coming from or
// providing a reward for players who were invited to play.
const data = wortal.session.getEntryPointData();
console.log(data);
```

### Stats

[API Reference](https://docs.games-api.ai/api/stats/)

Track stats for players and record their high scores with the Stats API.

```javascript
// Get the player's high score for the level.
wortal.stats.getStatsAsync("level1")
    .then(stats => console.log(stats.value));

// Set the player's high score for the game.
wortal.stats.postStatsAsync("level1", 1000)
    .then(() => console.log("High score set!"));
```

### Tournament

[API Reference](https://docs.games-api.ai/api/tournament/)

The Tournament API is used to create and manage tournaments for your game.

```javascript
// Create a tournament.
const payload = {
    initialScore: 100,
    config: {
        title: "Level 1 Tournament",
    },
    data: {
        level: 1,
    },
};

wortal.tournament.createAsync(payload)
    .then(tournament => console.log(tournament.payload["level"]));

// Post a score to a tournament.
wortal.tournament.postScoreAsync(200)
    .then(() => console.log("Score posted!"));
```
