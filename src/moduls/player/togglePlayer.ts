declare let window: any;

export default function togglePlayer() {
  if (window.DZ.player.isPlaying()) {
    window.DZ.player.pause();
  } else {
    window.DZ.player.play();
  }
}
