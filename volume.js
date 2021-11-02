window.SetVolume = function(val, id)
{
    var player = document.getElementById(id);
    player.volume = val / 100;
}