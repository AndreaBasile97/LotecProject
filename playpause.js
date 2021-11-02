function playPause(id) {
    var mediaPlayer = document.getElementById(id);
    if (mediaPlayer.paused) {
        mediaPlayer.play(); 
        $('.btn-pause').show();
        $('.btn-play').hide();
    } else {
        mediaPlayer.pause(); 
        $('.btn-play').show();
        $('.btn-pause').hide();
    }
    document.getElementById(id).addEventListener('ended',myHandler,false);
    function myHandler(e) {
        $('.btn-play').show();
        $('.btn-pause').hide();
    }
}


