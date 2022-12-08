function draw() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let canvas1 = document.getElementById('canvas1');
    let ctx1 = canvas1.getContext('2d');
    var timer = null;
    let image = new Image();
    let video = document.getElementById('myvideo');
    video.oncanplay = function () {
        console.log("视频加载完成，可以播放");
    };
    function play() {
        video.src = './清华大学 - Twitter Search _ Twitter_2.mp4';
        video.play();
        timer = setInterval(function () {
            if (video.currentTime >= video.duration) {
                stop();
            }
            ctx.drawImage(video, (canvas.width - video.videoWidth) / 2, (canvas.height - video.videoHeight) / 2, video.videoWidth, video.videoHeight);
        }, 16);
    }
    function stop() {
        clearInterval(timer);
        video.pause();
    }
    document.getElementById("play").onclick = function () {
        play();
    };
    document.getElementById("stop").onclick = function () {
        stop();
    };
    image.src = './屏幕截图_20221205_151340.png';
    image.onload = function () {
        ctx1.drawImage(image, 0, 0, 500, 500);
        console.log(image.height);
    };
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            ctx.save();
            ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
            ctx.translate(10 + j * 50, 10 + i * 50);
            ctx.fillRect(0, 0, 25, 25);
            ctx.restore();
        }
    }
}
