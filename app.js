//
//
//
//
//
//
function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  timerSeconds = (seconds % 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(70));
