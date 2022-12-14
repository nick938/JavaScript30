function draw() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const mouse = {
        x: innerWidth / 2,
        y: innerHeight / 2
    };
    let isMouseDown = false;
    function gc() {
        var s = "0123456789ABCDEF";
        var c = "#";
        for (var i = 0; i < 6; i++) {
            c += s[Math.ceil(Math.random() * 15)];
        }
        return c;
    }
    window.onmousemove = function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        if (isMouseDown) {
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 10, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
            console.log(mouse.x, mouse.y, e);
        }
    };
    window.onmousedown = function (e) {
        isMouseDown = true;
    };
    window.onmouseup = function () {
        isMouseDown = false;
    };
}
