// Todo
// 1.button 点击开发播放或者暂停
// 2.视频音量与播放速度可以调节
// 3.显示视频的播放进度，并且可以拖动

let video = document.querySelector(".player__video.viewer");
let button = document.querySelector(".player__button.toggle");
let volume = document.querySelector("input[name=volume]");
let playbackRate = document.querySelector("input[name=playbackRate]");
let skip10 = document.querySelector(".player__button[data-skip='-10']");
let skip25 = document.querySelector(".player__button[data-skip='25']");
let duration = document.querySelector(".progress__filled");
duration.style.flexBasis = "0%";
function play() {
  if (video.paused) {
    video.play();
    button.innerText = "❚ ❚";
  } else {
    video.pause();
    button.innerText = "►";
  }
}

function volumeControl() {
  video.volume = this.value;
  console.log(this.value);
}
function rateControl() {
  video.playbackRate = this.value;
  console.log(this.value);
}
button.addEventListener("click", play);
volume.addEventListener("input", volumeControl);
playbackRate.addEventListener("input", rateControl);
skip10.onclick = () => {
  video.currentTime -= 10;
};
skip25.onclick = () => {
  video.currentTime += 25;
};

video.ontimeupdate = (event) => {
  console.log(1);
  duration.style.flexBasis = (video.currentTime / video.duration) * 100 + "%";
};
