const progressBar = document.querySelector('.progress-bar');   
const watchedBar = document.querySelector('.watched-bar');
const playHead = document.querySelector('.playhead');
const videoContainer = document.getElementById('indagine1');
const video = document.getElementById('i1');

video.addEventListener('timeupdate', function() {
    var watched = 100 / video.duration * video.currentTime;
    watchedBar.style.width = watched + '%';
    playHead.style.left = watched + '%';

    if (video.ended) {
        playButton.style.display = '';
        pauseButton.style.display = 'none';
    }
});

progressBar.addEventListener('mousedown', function(event) {
    const pos = (event.pageX - (progressBar.offsetLeft + progressBar.offsetParent.offsetLeft)) / progressBar.offsetWidth;
    video.currentTime = pos * video.duration;
});
