
var lastID = null;

var handleMouseover = function (e) {
    var target = e.target || e.srcElement;
    lastID = target.parentNode.id;
    
    if(lastID!=null || lastID!="undefined") {
        console.log(lastID)
        new ScrollZoom($("#"+ lastID),16,0.5);
    }
};

if (document.addEventListener) {
    document.addEventListener('mouseover', handleMouseover, false);
}
else {
    document.attachEvent('onmouseover', handleMouseover);
}