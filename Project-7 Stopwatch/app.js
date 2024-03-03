let startBtn = document.querySelector("#startBtn");

let stopBtn = document.querySelector("#stopBtn");

let resetBtn = document.querySelector("#resetBtn");

let resumeBtn = document.querySelector("#resumeBtn");

let msDiv = document.querySelector("#msDiv");

let miliSec = document.querySelector("#ms");

miliSec.innerHTML = 0;

let secDiv = document.querySelector("#secDiv");

let secRight = document.querySelector("#secRight");

secRight.innerHTML = 0;

let secLeft = document.querySelector("#secLeft");

secLeft.innerHTML = 0;

let minDiv = document.querySelector("#minDiv");

let minLeft = document.querySelector("#minLeft");

minLeft.innerHTML = 0;

let minRight = document.querySelector("#minRight");

let hourDiv = document.querySelector("#hourDiv");

let hours = document.querySelector("#hours");

let dayDiv = document.querySelector("#dayDiv");

let days = document.querySelector("#days");

let timer = false;

startBtn.addEventListener("click", (e) => {
  e.preventDefault();

  timer = true;

  stopWatch(timer);

  startBtn.style.display = "none";

  stopBtn.style.display = "inline-block";
  resetBtn.style.display = "inline-block";

  msDiv.style.display = "block";
});

stopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  timer = false;

  stopWatch(timer);

  stopBtn.style.display = "none";
  resumeBtn.style.display = "inline-block";
});

resumeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  timer = true;

  stopWatch(timer);

  resumeBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();

  timer = false;

  stopWatch(timer);

  resumeBtn.style.display = "none";
  stopBtn.style.display = "none";
  resetBtn.style.display = "none";
  startBtn.style.display = "inline-block";

  days.innerHTML = 0;

  dayDiv.style.display = "none";

  hours.innerHTML = 0;

  hourDiv.style.display = "none";

  minLeft.innerHTML = 0;
  minRight.innerHTML = 0;
  minDiv.style.display = "none";

  secLeft.innerHTML = 0;
  secRight.innerHTML = 0;
  secDiv.style.display = "none";

  miliSec.innerHTML = 0;
  msDiv.style.display = "none";
});

let stopWatch = (getPermision) => {
  getPermision = timer;

  if (getPermision) {
    setTimeout(() => {
      stopWatch(timer);

      miliSec.innerHTML = Number(miliSec.innerHTML) + 1;

      if (miliSec.innerHTML > 98) {
        secDiv.style.display = "block";
        miliSec.innerHTML = 0;

        secRight.innerHTML = Number(secRight.innerHTML) + 1;
      }

      if (secRight.innerHTML > 9) {
        miliSec.innerHTML = 0;
        secRight.innerHTML = 0;
        secLeft.innerHTML = Number(secLeft.innerHTML) + 1;
      }

      if (
        secLeft.innerHTML == 5 &&
        secRight.innerHTML == 9 &&
        miliSec.innerHTML > 97
      ) {
        minDiv.style.display = "block";
        secLeft.innerHTML = 0;
        secRight.innerHTML = 0;
        miliSec.innerHTML = 0;

        minRight.innerHTML = Number(minRight.innerHTML) + 1;
      }

      if (minRight.innerHTML > 9) {
        minRight.innerHTML = 0;
        minLeft.innerHTML = Number(minLeft.innerHTML) + 1;
      }

      if (
        minLeft.innerHTML == 5 &&
        minRight.innerHTML == 9 &&
        miliSec.innerHTML > 96
      ) {
        hourDiv.style.display = "block";
        minLeft.innerHTML = 0;
        minRight.innerHTML = 0;

        hours.innerHTML = Number(hours.innerHTML) + 1;
      }

      if (hours.innerHTML > 24) {
        dayDiv.style.display = "block";
        hours.innerHTML = 0;
        days.innerHTML = Number(days.innerHTML) + 1;
      }
    }, 10);
  } else {
    console.log("timer false");
  }
};
