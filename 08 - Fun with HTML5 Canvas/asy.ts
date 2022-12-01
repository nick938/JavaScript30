const canvas = document.querySelector("#draw") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
