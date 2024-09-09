# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.1.0] - 2024-09-09
###
- Ad
  - Add isEnabled

## [3.0.0] - 2024-05-15
### BREAKING CHANGE
- Auto initialization has been removed. You must now call Wortal.initializeAsync() and Wortal.startGameAsync() manually to initialize the SDK.

### Added
- Core
  - Compatibility with Wortal 2.0
- Ads
  - Support for ads on Telegram

## [2.5.3] - 2023-10-17
### Added
- Ads
  - Banner ads

## [2.5.2] - 2023-08-30
### Fixed
- Core
  - ReferenceError when calling functions marked async

## [2.5.1] - 2023-08-28
### Added
- Core
  - setLoadingProgress API

### Fixed
- Session
  - Typo in switchGameAsync args

## [2.5.0] - 2023-08-23
### Added
- Core
  - Tournament API
  - Manual initialization option
- Ads
  - isAdBlocked API
- Session
  - getDevice, getOrientation, onOrientationChange, switchGameAsync APIs

### Changed
- Core
  - Updated SDK Core to v1.6

## [2.4.0] - 2023-07-03
### Added
- Core
  - Added Notifications API
  - New APIs: getSupportedAPIs, performHapticFeedbackAsync
- Analytics
  - New events: logSocialInvite, logSocialShare, logPurchase, logPurchaseSubscription
- Context
  - New APIs: inviteAsync, shareLinkAsync, isSizeBetween
  - New payload types

### Changed
- Core
  - Organized api, classes, types and interfaces
  - Updated Wortal SDK Core to v1.5.0

## [2.3.0] - 2023-04-25
### Added
- Ads on Viber
- Group chat context for FB Instant Games
- Game ID parsing for FB Instant Games
- Converter util for FB leaderboards
- Ads API: noFill callback for ad calls
- Context APIs: getType, getPlayersAsync, shareLinkAsync, isSizeBetween
- Player API: flushDataAsync, getASIDAsync, getSignedASIDAsync, canSubscribeBotAsync, subscribeBotAsync
- Session API: getPlatform

### Changed
- Context and Player APIs now have optional null return values to match platform SDKs
- Improved docs
- Improved error handling

## [2.2.0] - 2023-02-21
### Added
- Support for FB Instant Games
- onPause callback

### Fixed
- Possible type mismatch for ad unit IDs

## [2.1.0] - 2022-12-06
### Added
- Support for Game Distribution platform

### Fixed
- Typos in documentation

### Changed
- Upgraded to SDK Core 1.2.0

## [2.0.2] - 2022-11-22
### Changed
- Context API calls now only accept ContextPayload parameters
- Upgraded to SDK Core 1.1.1

## [2.0.1] - 2022-11-18
### Fixed
- Incorrect parameter in analytics.logScore
- Missing parameter in analytics.logTutorialEnd

## [2.0.0] - 2022-11-18
### Breaking Change
- API access is now by module (wortal.ads, wortal.analytics)

### Added
- Context API
- In-App Purchase API
- Leaderboard API
- Player API
- Session API
- Examples and typedefs in documentation

### Changed
- Extension now uses Wortal SDK Core

## [1.0.0] - 2022-10-11
- Initial release
