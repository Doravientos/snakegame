'use strict';
const ServerConfig = require('../configs/server-config');

class NotificationService {

    setSockets(sockets) {
        this.sockets = sockets;
    }

    broadcastClearBackgroundImage() {
        this.sockets.emit(ServerConfig.IO.OUTGOING.NEW_BACKGROUND_IMAGE);
    }

    broadcastGameState(gameState) {
        this.sockets.emit(ServerConfig.IO.OUTGOING.NEW_STATE, gameState);
    }

    broadcastKill(killerName, victimName, killerColor, victimColor) {
        this.sockets.emit(ServerConfig.IO.OUTGOING.NOTIFICATION.KILL, killerName, victimName, killerColor, victimColor);
    }

    broadcastKillEachOther(victimSummaries) {
        this.sockets.emit(ServerConfig.IO.OUTGOING.NOTIFICATION.KILLED_EACH_OTHER, victimSummaries);
    }

    broadcastNewBackgroundImage(backgroundImage) {
        this.sockets.emit(ServerConfig.IO.OUTGOING.NEW_BACKGROUND_IMAGE, backgroundImage);
    }

    broadcastNotification(message, fontColor) {
        console.log(message);
        this.sockets.emit(ServerConfig.IO.OUTGOING.NOTIFICATION.GENERAL, message, fontColor);
    }

    broadcastRanIntoWall(playerName, playerColor) {
        this.sockets.emit(ServerConfig.IO.OUTGOING.NOTIFICATION.RAN_INTO_WALL, playerName, playerColor);
    }

    broadcastSuicide(victimName, victimColor) {
        this.sockets.emit(ServerConfig.IO.OUTGOING.NOTIFICATION.SUICIDE, victimName, victimColor);
    }
}

module.exports = NotificationService;
