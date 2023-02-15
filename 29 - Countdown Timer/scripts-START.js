const timeLeft = document.querySelector(".display__time-left");
const endTiem = document.querySelector(".display__end-time");
const input = document.querySelector("input");
const btns = document.querySelectorAll("button.timer__button");
let timer;
btns.forEach((btn) => btn.addEventListener("click", setTime));

function setTime(e) {
  e.preventDefault();

  let time = input.value * 60 || e.target.dataset.time;
  let mins = time > 60 ? time / 60 : 0;
  let secs = time > 60 ? time % 60 : time;
  timeLeft.textContent = mins + ":" + secs;
  // 切换不同按钮时，清除定时器
  if (timer) {
    clearInterval(timer);
  }
  // 怎么让它每秒减少
  timer = setInterval(() => {
    time = time - 1;
    if (time < 0) {
      clearInterval(timer);
      return;
    }
    mins = time > 60 ? Math.floor(time / 60) : 0;
    secs = time > 60 ? time % 60 : time;
    timeLeft.textContent = mins + ":" + secs;
  }, 1000);

  endTiem.textContent =
    new Date(Date.now() + time * 1000).getHours() +
    ":" +
    new Date(Date.now() + time * 1000).getMinutes() +
    ":" +
    new Date(Date.now() + time * 1000).getSeconds() +
    "   should be back!";
  custom.reset();
}

custom.addEventListener("submit", setTime);
