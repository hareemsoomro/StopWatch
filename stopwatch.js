var min = 0;
var sec = 0;
var milisec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var miliHeading = document.getElementById("milisec");
var interval;
function timer() {
  milisec++;
  miliHeading.innerHTML = milisec;
  if (milisec >= 100) {
    sec++;
    milisec = 0;
    secHeading.innerHTML = sec;
  }
  if (sec >= 60) {
    min++;
    sec = 0;
    milisec = 0;
    minHeading.innerHTML = min;
  }
}

function start() {
  interval = setInterval(timer, 10);
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("reset").disabled = false;
}
function stop() {
    clearInterval(interval);
    document.getElementById("pause").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("reset").disabled = false;
}
function reset(){
  document.getElementById("reset").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  clearInterval(interval);
  secHeading.innerHTML=0
  minHeading.innerHTML=0
  miliHeading.innerHTML=0
  milisec = 0;
  sec = 0;
  min=0;

}