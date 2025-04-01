const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");
// input
// const hr = 0;
// const min = 0;
const sec = 10; // creiamo il tempo del timer

// const hours = hr * 3600000;
// const minutes = min * 60000;
const seconds = sec * 1000; // trasformiamo in millisecondi
const setTime = seconds; // variabile con secondi in millisecondi
const startTime = Date.now(); // millisecondi dal 1 gennaio '70

const futureTime = startTime + setTime; // somma tra tempo del timer e tempo dal 1 gennaio in millesecondi

const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
  const currentTime = Date.now(); // millisecondi dal 1 gennaio '70
  const remainingTime = futureTime - currentTime; //
  const angle = (remainingTime / setTime) * 360; // i gradi dell'angolazione cambiano in base al tempo che passa

  // progress indicator
  if (angle > 180) {
    semicircles[2].style.display = "none";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  } else {
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  }

  // timer
  // const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  // const mins = Math.floor((remainingTime / (1000 * 60)) % 60);
  const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString(`en-US`, { minimumIntegerDigits: 2, useGrouping: false });

  timer.innerHTML = `<div>${secs}</div>`;
  // <div>${hrs}</div>
  // <div class="colon">:</div>
  // <div>${mins}</div>
  // <div>:</div>
  // 5sec condition
  if (remainingTime <= 6000) {
    semicircles[0].style.backgroundColor = "red";
    semicircles[1].style.backgroundColor = "red";
  }

  // end
  if (remainingTime < 0) {
    clearInterval(timerLoop);
    semicircles[0].style.display = "none";
    semicircles[1].style.display = "none";
    semicircles[2].style.display = "none";

    timer.innerHTML = `
    <div>00</div>
  `;
  }
}
