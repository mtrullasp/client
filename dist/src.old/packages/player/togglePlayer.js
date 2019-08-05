"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DZ = window.DZ;
function togglePlayer() {
    if (DZ.player.isPlaying()) {
        DZ.player.pause();
    }
    else {
        DZ.player.play();
    }
}
exports.default = togglePlayer;
