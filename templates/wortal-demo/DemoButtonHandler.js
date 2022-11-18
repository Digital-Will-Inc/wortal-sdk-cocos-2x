import wortal from "../wortal-api/wortal";

cc.Class({
    extends: cc.Component,

    properties: {
        txtLog: cc.RichText,
        btnInterstitial: cc.Button,
        btnRewarded: cc.Button,
        btnLevelStart: cc.Button,
        btnLevelEnd: cc.Button,
        btnLeaderboardGet: cc.Button,
        btnLeaderboardAdd: cc.Button,
        btnLeaderboardPlayer: cc.Button,
        btnLeaderboardAll: cc.Button,
        btnLeaderboardCount: cc.Button,
        btnContextChoose: cc.Button,
        btnContextSwitch: cc.Button,
        btnContextCreate: cc.Button,
        btnContextShare: cc.Button,
        btnContextUpdate: cc.Button,
        btnIAPCheck: cc.Button,
        btnIAPCatalog: cc.Button,
        btnIAPGet: cc.Button,
        btnIAPBuy: cc.Button,
        btnIAPConsume: cc.Button,
        btnPlayerId: cc.Button,
        btnPlayerName: cc.Button,
        btnPlayerPhoto: cc.Button,
        btnPlayerSetData: cc.Button,
        btnPlayerGetData: cc.Button,
        btnPlayerGetFriends: cc.Button,
        btnPlayerGetSigned: cc.Button,
    },

    onLoad() {
        this.btnInterstitial.node.on("click", this.callInterstitial, this);
        this.btnRewarded.node.on("click", this.callRewarded, this);
        this.btnLevelStart.node.on("click", this.callLevelStart, this);
        this.btnLevelEnd.node.on("click", this.callLevelEnd, this);
        this.btnLeaderboardGet.node.on("click", this.callLeaderboardGet, this);
        this.btnLeaderboardAdd.node.on("click", this.callLeaderboardAdd, this);
        this.btnLeaderboardPlayer.node.on("click", this.callLeaderboardPlayer, this);
        this.btnLeaderboardAll.node.on("click", this.callLeaderboardAll, this);
        this.btnLeaderboardCount.node.on("click", this.callLeaderboardCount, this);
        this.btnContextChoose.node.on("click", this.callContextChoose, this);
        this.btnContextSwitch.node.on("click", this.callContextSwitch, this);
        this.btnContextCreate.node.on("click", this.callContextCreate, this);
        this.btnContextShare.node.on("click", this.callContextShare, this);
        this.btnContextUpdate.node.on("click", this.callContextUpdate, this);
        this.btnIAPCheck.node.on("click", this.callIAPCheck, this);
        this.btnIAPCatalog.node.on("click", this.callIAPCatalog, this);
        this.btnIAPGet.node.on("click", this.callIAPGet, this);
        this.btnIAPBuy.node.on("click", this.callIAPBuy, this);
        this.btnIAPConsume.node.on("click", this.callIAPConsume, this);
        this.btnPlayerId.node.on("click", this.callPlayerId, this);
        this.btnPlayerName.node.on("click", this.callPlayerName, this);
        this.btnPlayerPhoto.node.on("click", this.callPlayerPhoto, this);
        this.btnPlayerSetData.node.on("click", this.callPlayerSetData, this);
        this.btnPlayerGetData.node.on("click", this.callPlayerGetData, this);
        this.btnPlayerGetFriends.node.on("click", this.callPlayerGetFriends, this);
        this.btnPlayerGetSigned.node.on("click", this.callPlayerGetSigned, this);
    },

    log(msg) {
        this.txtLog.string = this.txtLog.string + "\n" + msg;
    },

    callInterstitial() {
        wortal.ads.showInterstitial('next', "NextLevel",
            () => this.log("Game Paused"),
            () => this.log("Game Resumed"));
    },

    callRewarded() {
        wortal.ads.showRewarded("BonusPoints",
            () => this.log("Game Paused"),
            () => this.log("Game Resumed"),
            () => this.log("No reward given."),
            () => this.log("Player given reward."));
    },

    callLevelStart() {
        wortal.analytics.logLevelStart("Demo");
        this.log("LevelStart");
    },

    callLevelEnd() {
        wortal.analytics.logLevelEnd("Demo", "100", true);
        this.log("LevelEnd");
    },

    callLeaderboardGet() {
        wortal.leaderboard.getLeaderboardAsync("global")
            .then(leaderboard => this.log("Leaderboard name: " + leaderboard.name))
            .catch(error => this.log(error));
    },

    callLeaderboardAdd() {
        wortal.leaderboard.sendEntryAsync("global", 100)
            .then(entry => this.log("Leaderboard Score: " + entry.getScore()))
            .catch(error => this.log(error));
    },

    callLeaderboardPlayer() {
        wortal.leaderboard.getPlayerEntryAsync("global")
            .then(entry => this.log("Leaderboard Score: " + entry.getScore()))
            .catch(error => this.log(error));
    },

    callLeaderboardAll() {
        wortal.leaderboard.getEntriesAsync("global", 10)
            .then(entries => this.log("Entry count: " + entries.length))
            .catch(error => this.log(error));
    },

    callLeaderboardCount() {
        wortal.leaderboard.getEntryCountAsync("global")
            .then(count => this.log("Entry count: " + count))
            .catch(error => this.log(error));
    },

    callContextChoose() {
        wortal.context.chooseAsync("Let's play!", this.createImg(256, 256), {
            caption: "Play",
        })
            .then(() => this.log("New context: " + wortal.context.getId()))
            .catch(error => this.log(error));
    },

    callContextSwitch() {
        wortal.context.switchAsync("CdJolqohlZa8mKEpWn4K0ibg")
            .then(() => this.log(wortal.context.getId()))
            .catch(error => this.log(error));
    },

    callContextCreate() {
        wortal.context.createAsync("3")
            .then(() => this.log(wortal.context.getId()))
            .catch(error => this.log(error));
    },

    callContextShare() {
        wortal.context.shareAsync("Let's play!", this.createImg(1200, 1200), {
            intent: "REQUEST",
            caption: "Play",
        })
            .then((result) => console.log(result))
            .catch(error => this.log(error));
    },

    callContextUpdate() {
        wortal.context.updateAsync("We played!", this.createImg(256, 256), {
            caption: "Play",
            data: {game: "da test"},
        })
            .then(() => this.log(wortal.context.getId()))
            .catch(error => this.log(error));
    },

    callIAPCheck() {
        let enabled = wortal.iap.isEnabled();
        this.log("IAP enabled: " + enabled);
    },

    callIAPCatalog() {
        wortal.iap.getCatalogAsync()
            .then(products => {
                this.log("Product count: " + products.length)
                this.log("Product 1 ID: " + products[0].productID);
            })
            .catch(error => this.log(error));
    },

    callIAPGet() {
        wortal.iap.getPurchasesAsync()
            .then(purchases => this.log("Purchases count: " + purchases.length))
            .catch(error => this.log(error));
    },

    callIAPBuy() {
        wortal.iap.makePurchaseAsync({productID: "jp.rgames.wortalsdktest.purchase.llama_pack_1.test"})
            .then(receipt => {
                this.log(receipt.paymentID);
                this.log(receipt.purchaseToken);
                this.purchaseToken = receipt.purchaseToken;
            })
            .catch(error => this.log(error));
    },

    callIAPConsume() {
        wortal.iap.consumePurchaseAsync(this.purchaseToken)
            .then(_ => this.log("Consumed purchase."))
            .catch(error => this.log(error));
    },

    callPlayerId() {
        let id = wortal.player.getID();
        this.log(id);
    },

    callPlayerName() {
        let name = wortal.player.getName();
        this.log(name);
    },

    callPlayerPhoto() {
        let photo = wortal.player.getPhoto();
        this.log(photo);
    },

    callPlayerSetData() {
        wortal.player.setDataAsync({
            items: {
                coins: 100,
                boosters: 2
            },
            lives: 3,
        }).catch(error => this.log(error));
    },

    callPlayerGetData() {
        wortal.player.getDataAsync(['items', 'lives'])
            .then(data => {
                this.log(data['items'].coins);
                this.log(data['items'].boosters);
                this.log(data['lives']);
            })
            .catch(error => this.log(error));
    },

    callPlayerGetFriends() {
        wortal.player.getConnectedPlayersAsync({
            size: 20,
        })
            .then(players => {
                this.log(players.length);
                this.log(players[0].id);
                this.log(players[0].name);
            })
            .catch(error => this.log(error));
    },

    callPlayerGetSigned() {
        wortal.player.getSignedPlayerInfoAsync()
            .then(player => {
                this.log(player.id);
                this.log(player.signature);
            })
            .catch(error => this.log(error));
    },

    createImg(width, height) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = `hsl(${Math.floor(Math.random() * 360)}deg,20%,50%)`;
        ctx.font = `${width / 16}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('wortal-sdk-est', width / 2, height / 2);
        return canvas.toDataURL();
    },
});
