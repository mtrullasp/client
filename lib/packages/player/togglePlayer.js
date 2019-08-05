"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function togglePlayer() {
    if (window.DZ.player.isPlaying()) {
        window.DZ.player.pause();
    }
    else {
        window.DZ.player.play();
    }
}
exports.default = togglePlayer;
//# sourceMappingURL=togglePlayer.js.map