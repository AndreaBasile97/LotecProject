var offset;
var left;
var totalWidth;
var percentage;
var vidTime;
var vid = document.getElementById("i1");
vid.ontimeupdate = function(){
var percentage = ( vid.currentTime / vid.duration ) * 100;
$("#custom-seekbar span").css("width", percentage+"%");
};

$("#custom-seekbar").on("mousedown", function x(e){
        $("#custom-seekbar").on("mousemove", function(e) {
        offset = $(this).offset();
        left = (e.pageX - offset.left);
        totalWidth = $("#custom-seekbar").width();
        percentage = ( left / totalWidth );
        vidTime = vid.duration * percentage;
        vid.currentTime = vidTime;
    });
}).mouseup(function () {
    $(this).unbind('mousemove');
});

$("#custom-seekbar").on("mousedown", function x(e){
    offset = $(this).offset();
        left = (e.pageX - offset.left);
        totalWidth = $("#custom-seekbar").width();
        percentage = ( left / totalWidth );
        vidTime = vid.duration * percentage;
        vid.currentTime = vidTime;
        vid.pause();
        $('.btn-pause').hide();
        $('.btn-play').show();
});

