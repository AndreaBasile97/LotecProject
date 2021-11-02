var videoId = 'i1';
    var scaleFactor = 1;
    var snapshots = [];

    /**
     * Captures a image frame from the provided video element.
     *
     * @param {Video} video HTML5 video element from where the image frame will be captured.
     * @param {Number} scaleFactor Factor to scale the canvas element that will be return. This is an optional parameter.
     *
     * @return {Canvas}
     */
    function capture(video, scaleFactor) {
        if (scaleFactor == null) {
            scaleFactor = 1;
        }
        var w = video.videoWidth * scaleFactor;
        var h = video.videoHeight * scaleFactor;
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);
        return canvas;
    }

    /**
     * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
     */
    function shoot() {
        var video = document.getElementById(videoId);
        var canvas = capture(video, scaleFactor);
        snapshots.unshift(canvas);
    }

    function download(){
        return Canvas2Image.saveAsPNG(snapshots[0]);
    }