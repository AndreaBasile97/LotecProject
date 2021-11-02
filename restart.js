function restartVideo(id) {
    var mediaPlayer = document.getElementById(id);
    mediaPlayer.pause();
    mediaPlayer.currentTime = 0;
    mediaPlayer.play();
}
