let SWHour = document.querySelector(".con-st .con-timer .hour");
let SWMin = document.querySelector(".con-st .con-timer .min");
let SWSec = document.querySelector(".con-st .con-timer .sec");
let titleSW = document.querySelector(".con-st #title");

let playBtn = document.querySelector(".con-st .stat .play");
let puseBtn = document.querySelector(".con-st .stat .puse");
let resetBtn = document.querySelector(".con-st .stat .reset");

let secound;
let minent;
let hourS;
count = 0;
function playStopWatch() {
  // count++;
  secound = setInterval(() => {
    count++;
    if (count == 60) {
      count = "00";
    } else {
      sec = SWSec.innerHTML < 9 ? `0${count}` : `${count}`;
      SWSec.innerHTML = sec;
      newDataStopWatch();
    }
  }, 1000);
  minent = setInterval(() => {
    count++;

    if (count == 60) {
      count = "00";
    } else {
      min = SWMin.innerHTML < 9 ? `0${count}` : `${count}`;
      SWMin.innerHTML = min;
    }
  }, 1000 * 60);
  hourS = setInterval(() => {
    if (count == 60) {
      count = "00";
    } else {
      SWHour.innerHTML++;
      hour = SWHour.innerHTML < 9 ? `0${count}` : `${count}`;
      SWHour.innerHTML = hour;
    }
  }, 1000 * 60 * 60);
}
playBtn.addEventListener("click", playStopWatch);
puseBtn.addEventListener("click", () => {
  clearInterval(secound);
  clearInterval(minent);
  clearInterval(hourS);
});
resetBtn.addEventListener("click", () => {
  SWSec.innerHTML = "00";
  SWMin.innerHTML = "00";
  SWHour.innerHTML = "00";
  count = 0;
  clearInterval(secound);
  clearInterval(minent);
  clearInterval(hourS);
  titleSW.value = "";
  localStorage.removeItem("stopWatch");
});

let stopWatchStorage;
if (localStorage.stopWatch == null) {
  stopWatchStorage = [];
} else {
  stopWatchStorage = JSON.parse(localStorage.stopWatch);
}

for (i = 0; i < stopWatchStorage.length; i++) {
  SWSec.innerHTML = stopWatchStorage[i].Sec;
  SWMin.innerHTML = stopWatchStorage[i].Min;
  SWHour.innerHTML = stopWatchStorage[i].Hour;
  count = stopWatchStorage[i].count;
  titleSW.value = stopWatchStorage[i].title;
}
// local storage
function newDataStopWatch() {
  let newStopWatch = {
    Sec: SWSec.innerHTML,
    Min: SWMin.innerHTML,
    Hour: SWHour.innerHTML,
    count: count,
    title: titleSW.value,
  };
  stopWatchStorage.push(newStopWatch);
  localStorage.setItem("stopWatch", JSON.stringify(stopWatchStorage));
}

/////////////////
// function for create stopWatch
function createStopWatch() {
  let btnSW = document.querySelector(".con-st .chouse input");
  let conStopWatch = document.querySelector(".con-st");
  btnSW.addEventListener("click", () => {
    let div = document.createElement("div");
    div.classList = "border";
    div.innerHTML = `      
              <label for="title">title:</label>
              <input type="text" name="" id="title" />
              <div class="con-timer">
                <div class="hour">00</div>
                <span>:</span>
                <div class="min">00</div>
                <span>:</span>
                <div class="sec">00</div>
              </div>
              <div class="stat">
                <div class="puse">puse <i class="fa-solid fa-pause"></i></div>
                <div class="play">play <i class="fa-solid fa-play"></i></div>
                <div class="reset">reset <i class="fa-solid fa-play"></i></div>
              </div>`;
    conStopWatch.appendChild(div);
  });
}
createStopWatch();
